import polarClient from "@/lib/polar";
import config from "@/lib/config";
import {
  checkout,
  portal,
  usage,
  webhooks,
  type polar,
} from "@polar-sh/better-auth";
import onPayload from "./on_payload";
import { onCheckoutCreated, onCheckoutUpdated } from "./on_checkout";
import {
  onOrderCreated,
  onOrderUpdated,
  onOrderPaid,
  onOrderRefunded,
} from "./on_order";
import { onRefundCreated, onRefundUpdated } from "./on_refund";
import {
  onSubscriptionCreated,
  onSubscriptionUpdated,
  onSubscriptionActive,
  onSubscriptionCanceled,
  onSubscriptionRevoked,
  onSubscriptionUncanceled,
} from "./on_subcription";
import { onProductCreated, onProductUpdated } from "./on_product";
import { onOrganizationUpdated } from "./on_organization";
import {
  onBenefitCreated,
  onBenefitUpdated,
  onBenefitGrantCreated,
  onBenefitGrantUpdated,
  onBenefitGrantRevoked,
} from "./on_benefit";
import {
  onCustomerCreated,
  onCustomerUpdated,
  onCustomerDeleted,
  onCustomerStateChanged,
} from "./on_customer";

export const polarPluginOptions: Parameters<typeof polar>[0] = {
  client: polarClient,
  createCustomerOnSignUp: true,
  getCustomerCreateParams: async ({ user }) => {
    return {
      metadata: {
        name: user.name ?? "",
        myCustomProperty: 123,
      },
    };
  },
  use: [
    checkout({
      successUrl: `${config.nextPublicAppUrl}/dashboard/payments/success?checkout_id={CHECKOUT_ID}`,
      returnUrl: `${config.nextPublicAppUrl}/dashboard/payments`,
      authenticatedUsersOnly: true,
    }),
    portal(),
    usage(),
    webhooks({
      secret: config.polar.webhookSecret ?? "",
      onPayload,
      onCheckoutCreated,
      onCheckoutUpdated,
      onOrderCreated,
      onOrderUpdated,
      onOrderPaid,
      onOrderRefunded,
      onRefundCreated,
      onRefundUpdated,
      onSubscriptionCreated,
      onSubscriptionUpdated,
      onSubscriptionActive,
      onSubscriptionCanceled,
      onSubscriptionRevoked,
      onSubscriptionUncanceled,
      onProductCreated,
      onProductUpdated,
      onOrganizationUpdated,
      onBenefitCreated,
      onBenefitUpdated,
      onBenefitGrantCreated,
      onBenefitGrantUpdated,
      onBenefitGrantRevoked,
      onCustomerCreated,
      onCustomerUpdated,
      onCustomerDeleted,
      onCustomerStateChanged,
    }),
  ],
};
