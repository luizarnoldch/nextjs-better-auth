# Polar Events I have

1. Checkout Created
2. Checkout Updated
3. Customer Updated
4. Customer State_Change
5. Subscription Created
6. Subscription Active
7. Subscription Updated
8. Order Created
9. Order Updated
10. Order Paid
11. Checkout Updated
12. Order Updated
13. Order Paid
14. Checkout Updated
15. Order Updated
16. Benefit_Grant Created
17. Benefit_Grant Created
18. Customer State_Changed

# Logs

# Checkout Created

```json
{
  "type": "checkout.created",
  "timestamp": "2026-03-30T16:13:36.564076Z",
  "data": {
    "id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "created_at": "2026-03-30T16:13:36.539565Z",
    "modified_at": null,
    "custom_field_data": {},
    "payment_processor": "stripe",
    "status": "open",
    "client_secret": "polar_c_xIwqQpgWH81NGlth3f81xPIl0Fe7YzlBCfv9p4diwpk",
    "url": "https://sandbox.polar.sh/checkout/polar_c_xIwqQpgWH81NGlth3f81xPIl0Fe7YzlBCfv9p4diwpk",
    "expires_at": "2026-03-31T16:13:36.539537Z",
    "success_url": "http://localhost:3000/dashboard/payments?checkout_id=f90a1b3b-63f8-4176-9022-9b917da04c88",
    "return_url": "http://localhost:3000/dashboard/payments",
    "embed_origin": null,
    "amount": 4000,
    "seats": null,
    "min_seats": null,
    "max_seats": null,
    "discount_amount": 0,
    "net_amount": 4000,
    "tax_amount": 0,
    "total_amount": 4000,
    "currency": "pen",
    "allow_trial": true,
    "active_trial_interval": "month",
    "active_trial_interval_count": 1,
    "trial_end": "2026-04-30T16:13:36.322650Z",
    "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "product_price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
    "discount_id": null,
    "allow_discount_codes": true,
    "require_billing_address": false,
    "is_discount_applicable": true,
    "is_free_product_price": false,
    "is_payment_required": false,
    "is_payment_setup_required": true,
    "is_payment_form_required": true,
    "customer_id": null,
    "is_business_customer": false,
    "customer_name": null,
    "customer_email": null,
    "customer_ip_address": "2001:1388:1760:1c0f:505d:8e0f:ffa7:7aaa",
    "customer_billing_name": null,
    "customer_billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "customer_tax_id": null,
    "locale": "en-US",
    "payment_processor_metadata": {
      "publishable_key": "pk_test_51Q025lDIA9pgt25rcR0OlBAZmrUlTJlbGDlCiumahhlqiHSzcBJvtKTsXptB0FXgBcrJ1nG6LbIZGMRZrohO0JZN00MQPYIDJu"
    },
    "customer_billing_address_fields": {
      "country": true,
      "state": false,
      "city": false,
      "postal_code": false,
      "line1": false,
      "line2": false
    },
    "billing_address_fields": {
      "country": "required",
      "state": "disabled",
      "city": "disabled",
      "postal_code": "disabled",
      "line1": "disabled",
      "line2": "disabled"
    },
    "trial_interval": null,
    "trial_interval_count": null,
    "metadata": {},
    "external_customer_id": null,
    "customer_external_id": null,
    "products": [
      {
        "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
        "created_at": "2026-03-28T00:23:48.517978Z",
        "modified_at": "2026-03-28T01:42:47.720189Z",
        "trial_interval": "month",
        "trial_interval_count": 1,
        "name": "Independiente",
        "description": null,
        "visibility": "public",
        "recurring_interval": "month",
        "recurring_interval_count": 1,
        "is_recurring": true,
        "is_archived": false,
        "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
        "prices": [
          {
            "created_at": "2026-03-28T00:58:02.025930Z",
            "modified_at": null,
            "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
            "source": "catalog",
            "amount_type": "fixed",
            "price_currency": "pen",
            "tax_behavior": null,
            "is_archived": false,
            "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
            "type": "recurring",
            "recurring_interval": "month",
            "price_amount": 4000
          }
        ],
        "benefits": [
          {
            "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
            "created_at": "2026-03-28T00:20:23.755611Z",
            "modified_at": null,
            "type": "custom",
            "description": "expedientes ilimitados",
            "selectable": true,
            "deletable": true,
            "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
          },
          {
            "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
            "created_at": "2026-03-28T00:43:28.934219Z",
            "modified_at": null,
            "type": "custom",
            "description": "5 GB de almacenamiento",
            "selectable": true,
            "deletable": true,
            "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
          }
        ],
        "medias": []
      }
    ],
    "product": {
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "prices": [
        {
          "created_at": "2026-03-28T00:58:02.025930Z",
          "modified_at": null,
          "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
          "source": "catalog",
          "amount_type": "fixed",
          "price_currency": "pen",
          "tax_behavior": null,
          "is_archived": false,
          "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
          "type": "recurring",
          "recurring_interval": "month",
          "price_amount": 4000
        }
      ],
      "benefits": [
        {
          "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
          "created_at": "2026-03-28T00:20:23.755611Z",
          "modified_at": null,
          "type": "custom",
          "description": "expedientes ilimitados",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
        },
        {
          "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
          "created_at": "2026-03-28T00:43:28.934219Z",
          "modified_at": null,
          "type": "custom",
          "description": "5 GB de almacenamiento",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
        }
      ],
      "medias": []
    },
    "product_price": {
      "created_at": "2026-03-28T00:58:02.025930Z",
      "modified_at": null,
      "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "source": "catalog",
      "amount_type": "fixed",
      "price_currency": "pen",
      "tax_behavior": null,
      "is_archived": false,
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "type": "recurring",
      "recurring_interval": "month",
      "price_amount": 4000
    },
    "prices": {
      "260ea636-e7ac-452e-ae4c-8c0db35365ca": [
        {
          "created_at": "2026-03-28T00:58:02.025930Z",
          "modified_at": null,
          "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
          "source": "catalog",
          "amount_type": "fixed",
          "price_currency": "pen",
          "tax_behavior": null,
          "is_archived": false,
          "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
          "type": "recurring",
          "recurring_interval": "month",
          "price_amount": 4000
        }
      ]
    },
    "discount": null,
    "subscription_id": null,
    "attached_custom_fields": [],
    "customer_metadata": {},
    "subtotal_amount": 4000
  }
}
```

# Checkout Update

```json
{
  "type": "checkout.updated",
  "timestamp": "2026-03-30T16:13:50.943971Z",
  "data": {
    "id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "created_at": "2026-03-30T16:13:36.539565Z",
    "modified_at": "2026-03-30T16:13:49.742312Z",
    "custom_field_data": {},
    "payment_processor": "stripe",
    "status": "confirmed",
    "client_secret": "polar_c_xIwqQpgWH81NGlth3f81xPIl0Fe7YzlBCfv9p4diwpk",
    "url": "https://sandbox.polar.sh/checkout/polar_c_xIwqQpgWH81NGlth3f81xPIl0Fe7YzlBCfv9p4diwpk",
    "expires_at": "2026-03-31T16:13:36.539537Z",
    "success_url": "http://localhost:3000/dashboard/payments?checkout_id=f90a1b3b-63f8-4176-9022-9b917da04c88",
    "return_url": "http://localhost:3000/dashboard/payments",
    "embed_origin": null,
    "amount": 4000,
    "seats": null,
    "min_seats": null,
    "max_seats": null,
    "discount_amount": 0,
    "net_amount": 4000,
    "tax_amount": 0,
    "total_amount": 4000,
    "currency": "pen",
    "allow_trial": true,
    "active_trial_interval": "month",
    "active_trial_interval_count": 1,
    "trial_end": "2026-04-30T16:13:49.739867Z",
    "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "product_price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
    "discount_id": null,
    "allow_discount_codes": true,
    "require_billing_address": false,
    "is_discount_applicable": true,
    "is_free_product_price": false,
    "is_payment_required": false,
    "is_payment_setup_required": true,
    "is_payment_form_required": true,
    "customer_id": null,
    "is_business_customer": false,
    "customer_name": "luiz arnold chavez burgos",
    "customer_email": "luizarnoldch@gmail.com",
    "customer_ip_address": "2001:1388:1760:1c0f:505d:8e0f:ffa7:7aaa",
    "customer_billing_name": null,
    "customer_billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "customer_tax_id": null,
    "locale": "en-US",
    "payment_processor_metadata": {
      "publishable_key": "pk_test_51Q025lDIA9pgt25rcR0OlBAZmrUlTJlbGDlCiumahhlqiHSzcBJvtKTsXptB0FXgBcrJ1nG6LbIZGMRZrohO0JZN00MQPYIDJu",
      "customer_id": "cus_UFCo9jyBtzq8ig",
      "intent_client_secret": "seti_1TGiRmDIA9pgt25rJubVAcDu_secret_UFCrDh9kQfe1OtTeOb45y0RIHK3x3I4",
      "intent_status": "requires_action"
    },
    "customer_billing_address_fields": {
      "country": true,
      "state": false,
      "city": false,
      "postal_code": false,
      "line1": false,
      "line2": false
    },
    "billing_address_fields": {
      "country": "required",
      "state": "disabled",
      "city": "disabled",
      "postal_code": "disabled",
      "line1": "disabled",
      "line2": "disabled"
    },
    "trial_interval": null,
    "trial_interval_count": null,
    "metadata": {},
    "external_customer_id": null,
    "customer_external_id": null,
    "products": [
      {
        "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
        "created_at": "2026-03-28T00:23:48.517978Z",
        "modified_at": "2026-03-28T01:42:47.720189Z",
        "trial_interval": "month",
        "trial_interval_count": 1,
        "name": "Independiente",
        "description": null,
        "visibility": "public",
        "recurring_interval": "month",
        "recurring_interval_count": 1,
        "is_recurring": true,
        "is_archived": false,
        "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
        "prices": [
          {
            "created_at": "2026-03-28T00:58:02.025930Z",
            "modified_at": null,
            "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
            "source": "catalog",
            "amount_type": "fixed",
            "price_currency": "pen",
            "tax_behavior": null,
            "is_archived": false,
            "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
            "type": "recurring",
            "recurring_interval": "month",
            "price_amount": 4000
          }
        ],
        "benefits": [
          {
            "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
            "created_at": "2026-03-28T00:20:23.755611Z",
            "modified_at": null,
            "type": "custom",
            "description": "expedientes ilimitados",
            "selectable": true,
            "deletable": true,
            "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
          },
          {
            "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
            "created_at": "2026-03-28T00:43:28.934219Z",
            "modified_at": null,
            "type": "custom",
            "description": "5 GB de almacenamiento",
            "selectable": true,
            "deletable": true,
            "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
          }
        ],
        "medias": []
      }
    ],
    "product": {
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "prices": [
        {
          "created_at": "2026-03-28T00:58:02.025930Z",
          "modified_at": null,
          "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
          "source": "catalog",
          "amount_type": "fixed",
          "price_currency": "pen",
          "tax_behavior": null,
          "is_archived": false,
          "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
          "type": "recurring",
          "recurring_interval": "month",
          "price_amount": 4000
        }
      ],
      "benefits": [
        {
          "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
          "created_at": "2026-03-28T00:20:23.755611Z",
          "modified_at": null,
          "type": "custom",
          "description": "expedientes ilimitados",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
        },
        {
          "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
          "created_at": "2026-03-28T00:43:28.934219Z",
          "modified_at": null,
          "type": "custom",
          "description": "5 GB de almacenamiento",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
        }
      ],
      "medias": []
    },
    "product_price": {
      "created_at": "2026-03-28T00:58:02.025930Z",
      "modified_at": null,
      "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "source": "catalog",
      "amount_type": "fixed",
      "price_currency": "pen",
      "tax_behavior": null,
      "is_archived": false,
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "type": "recurring",
      "recurring_interval": "month",
      "price_amount": 4000
    },
    "prices": {
      "260ea636-e7ac-452e-ae4c-8c0db35365ca": [
        {
          "created_at": "2026-03-28T00:58:02.025930Z",
          "modified_at": null,
          "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
          "source": "catalog",
          "amount_type": "fixed",
          "price_currency": "pen",
          "tax_behavior": null,
          "is_archived": false,
          "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
          "type": "recurring",
          "recurring_interval": "month",
          "price_amount": 4000
        }
      ]
    },
    "discount": null,
    "subscription_id": null,
    "attached_custom_fields": [],
    "customer_metadata": {},
    "subtotal_amount": 4000
  }
}
```

# Customer Update

```json
{
  "type": "customer.updated",
  "timestamp": "2026-03-30T16:13:51.181878Z",
  "data": {
    "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "created_at": "2026-03-30T16:07:05.856477Z",
    "modified_at": "2026-03-30T16:13:50.303244Z",
    "metadata": {
      "name": "Luiz Arnold Chavez Burgos",
      "myCustomProperty": 123
    },
    "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
    "email": "luizarnoldch@gmail.com",
    "email_verified": false,
    "type": "individual",
    "name": "luiz arnold chavez burgos",
    "billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "tax_id": null,
    "locale": "en-US",
    "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
    "deleted_at": null,
    "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
  }
}
```

# Customer State Changed

```json
{
  "type": "customer.state_changed",
  "timestamp": "2026-03-30T16:13:51.228834Z",
  "data": {
    "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "created_at": "2026-03-30T16:07:05.856477Z",
    "modified_at": "2026-03-30T16:13:50.303244Z",
    "metadata": {
      "name": "Luiz Arnold Chavez Burgos",
      "myCustomProperty": 123
    },
    "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
    "email": "luizarnoldch@gmail.com",
    "email_verified": false,
    "type": "individual",
    "name": "luiz arnold chavez burgos",
    "billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "tax_id": null,
    "locale": "en-US",
    "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
    "deleted_at": null,
    "active_subscriptions": [],
    "granted_benefits": [],
    "active_meters": [],
    "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
  }
}
```

# Subscription Created

```json
{
  "type": "subscription.created",
  "timestamp": "2026-03-30T16:13:53.633322Z",
  "data": {
    "created_at": "2026-03-30T16:13:53.540276Z",
    "modified_at": null,
    "id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
    "amount": 4000,
    "currency": "pen",
    "recurring_interval": "month",
    "recurring_interval_count": 1,
    "status": "trialing",
    "current_period_start": "2026-03-30T16:13:53.532380Z",
    "current_period_end": "2026-04-30T16:13:49.739867Z",
    "trial_start": "2026-03-30T16:13:53.532380Z",
    "trial_end": "2026-04-30T16:13:49.739867Z",
    "cancel_at_period_end": false,
    "canceled_at": null,
    "started_at": "2026-03-30T16:13:53.532380Z",
    "ends_at": null,
    "ended_at": null,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "discount_id": null,
    "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "seats": null,
    "customer_cancellation_reason": null,
    "customer_cancellation_comment": null,
    "price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
    "metadata": {},
    "custom_field_data": {},
    "customer": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "created_at": "2026-03-30T16:07:05.856477Z",
      "modified_at": "2026-03-30T16:13:50.303244Z",
      "metadata": {
        "name": "Luiz Arnold Chavez Burgos",
        "myCustomProperty": 123
      },
      "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
      "email": "luizarnoldch@gmail.com",
      "email_verified": false,
      "type": "individual",
      "name": "luiz arnold chavez burgos",
      "billing_address": {
        "line1": null,
        "line2": null,
        "postal_code": null,
        "city": null,
        "state": null,
        "country": "PE"
      },
      "tax_id": null,
      "locale": "en-US",
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "deleted_at": null,
      "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
    },
    "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "user": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "email": "luizarnoldch@gmail.com",
      "public_name": "l",
      "avatar_url": null,
      "github_username": null
    },
    "product": {
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "metadata": {
        "max_gb_storage": "5"
      },
      "prices": [
        {
          "created_at": "2026-03-28T00:58:02.025930Z",
          "modified_at": null,
          "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
          "source": "catalog",
          "amount_type": "fixed",
          "price_currency": "pen",
          "tax_behavior": null,
          "is_archived": false,
          "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
          "type": "recurring",
          "recurring_interval": "month",
          "price_amount": 4000
        }
      ],
      "benefits": [
        {
          "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
          "created_at": "2026-03-28T00:20:23.755611Z",
          "modified_at": null,
          "type": "custom",
          "description": "expedientes ilimitados",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
          "metadata": {},
          "properties": {
            "note": null
          },
          "is_tax_applicable": true
        },
        {
          "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
          "created_at": "2026-03-28T00:43:28.934219Z",
          "modified_at": null,
          "type": "custom",
          "description": "5 GB de almacenamiento",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
          "metadata": {},
          "properties": {
            "note": null
          },
          "is_tax_applicable": true
        }
      ],
      "medias": [],
      "attached_custom_fields": []
    },
    "discount": null,
    "price": {
      "created_at": "2026-03-28T00:58:02.025930Z",
      "modified_at": null,
      "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "source": "catalog",
      "amount_type": "fixed",
      "price_currency": "pen",
      "tax_behavior": null,
      "is_archived": false,
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "type": "recurring",
      "recurring_interval": "month",
      "price_amount": 4000
    },
    "prices": [
      {
        "created_at": "2026-03-28T00:58:02.025930Z",
        "modified_at": null,
        "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
        "source": "catalog",
        "amount_type": "fixed",
        "price_currency": "pen",
        "tax_behavior": null,
        "is_archived": false,
        "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
        "type": "recurring",
        "recurring_interval": "month",
        "price_amount": 4000
      }
    ],
    "meters": [],
    "pending_update": null
  }
}
```

# Subscription Active

```json
{
  "type": "subscription.active",
  "timestamp": "2026-03-30T16:13:53.745034Z",
  "data": {
    "created_at": "2026-03-30T16:13:53.540276Z",
    "modified_at": null,
    "id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
    "amount": 4000,
    "currency": "pen",
    "recurring_interval": "month",
    "recurring_interval_count": 1,
    "status": "trialing",
    "current_period_start": "2026-03-30T16:13:53.532380Z",
    "current_period_end": "2026-04-30T16:13:49.739867Z",
    "trial_start": "2026-03-30T16:13:53.532380Z",
    "trial_end": "2026-04-30T16:13:49.739867Z",
    "cancel_at_period_end": false,
    "canceled_at": null,
    "started_at": "2026-03-30T16:13:53.532380Z",
    "ends_at": null,
    "ended_at": null,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "discount_id": null,
    "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "seats": null,
    "customer_cancellation_reason": null,
    "customer_cancellation_comment": null,
    "price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
    "metadata": {},
    "custom_field_data": {},
    "customer": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "created_at": "2026-03-30T16:07:05.856477Z",
      "modified_at": "2026-03-30T16:13:50.303244Z",
      "metadata": {
        "name": "Luiz Arnold Chavez Burgos",
        "myCustomProperty": 123
      },
      "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
      "email": "luizarnoldch@gmail.com",
      "email_verified": false,
      "type": "individual",
      "name": "luiz arnold chavez burgos",
      "billing_address": {
        "line1": null,
        "line2": null,
        "postal_code": null,
        "city": null,
        "state": null,
        "country": "PE"
      },
      "tax_id": null,
      "locale": "en-US",
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "deleted_at": null,
      "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
    },
    "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "user": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "email": "luizarnoldch@gmail.com",
      "public_name": "l",
      "avatar_url": null,
      "github_username": null
    },
    "product": {
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "metadata": {
        "max_gb_storage": "5"
      },
      "prices": [
        {
          "created_at": "2026-03-28T00:58:02.025930Z",
          "modified_at": null,
          "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
          "source": "catalog",
          "amount_type": "fixed",
          "price_currency": "pen",
          "tax_behavior": null,
          "is_archived": false,
          "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
          "type": "recurring",
          "recurring_interval": "month",
          "price_amount": 4000
        }
      ],
      "benefits": [
        {
          "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
          "created_at": "2026-03-28T00:20:23.755611Z",
          "modified_at": null,
          "type": "custom",
          "description": "expedientes ilimitados",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
          "metadata": {},
          "properties": {
            "note": null
          },
          "is_tax_applicable": true
        },
        {
          "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
          "created_at": "2026-03-28T00:43:28.934219Z",
          "modified_at": null,
          "type": "custom",
          "description": "5 GB de almacenamiento",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
          "metadata": {},
          "properties": {
            "note": null
          },
          "is_tax_applicable": true
        }
      ],
      "medias": [],
      "attached_custom_fields": []
    },
    "discount": null,
    "price": {
      "created_at": "2026-03-28T00:58:02.025930Z",
      "modified_at": null,
      "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "source": "catalog",
      "amount_type": "fixed",
      "price_currency": "pen",
      "tax_behavior": null,
      "is_archived": false,
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "type": "recurring",
      "recurring_interval": "month",
      "price_amount": 4000
    },
    "prices": [
      {
        "created_at": "2026-03-28T00:58:02.025930Z",
        "modified_at": null,
        "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
        "source": "catalog",
        "amount_type": "fixed",
        "price_currency": "pen",
        "tax_behavior": null,
        "is_archived": false,
        "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
        "type": "recurring",
        "recurring_interval": "month",
        "price_amount": 4000
      }
    ],
    "meters": [],
    "pending_update": null
  }
}
```

# Subscription Updated

```json
{
  "type": "subscription.updated",
  "timestamp": "2026-03-30T16:13:53.851746Z",
  "data": {
    "created_at": "2026-03-30T16:13:53.540276Z",
    "modified_at": null,
    "id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
    "amount": 4000,
    "currency": "pen",
    "recurring_interval": "month",
    "recurring_interval_count": 1,
    "status": "trialing",
    "current_period_start": "2026-03-30T16:13:53.532380Z",
    "current_period_end": "2026-04-30T16:13:49.739867Z",
    "trial_start": "2026-03-30T16:13:53.532380Z",
    "trial_end": "2026-04-30T16:13:49.739867Z",
    "cancel_at_period_end": false,
    "canceled_at": null,
    "started_at": "2026-03-30T16:13:53.532380Z",
    "ends_at": null,
    "ended_at": null,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "discount_id": null,
    "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "seats": null,
    "customer_cancellation_reason": null,
    "customer_cancellation_comment": null,
    "price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
    "metadata": {},
    "custom_field_data": {},
    "customer": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "created_at": "2026-03-30T16:07:05.856477Z",
      "modified_at": "2026-03-30T16:13:50.303244Z",
      "metadata": {
        "name": "Luiz Arnold Chavez Burgos",
        "myCustomProperty": 123
      },
      "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
      "email": "luizarnoldch@gmail.com",
      "email_verified": false,
      "type": "individual",
      "name": "luiz arnold chavez burgos",
      "billing_address": {
        "line1": null,
        "line2": null,
        "postal_code": null,
        "city": null,
        "state": null,
        "country": "PE"
      },
      "tax_id": null,
      "locale": "en-US",
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "deleted_at": null,
      "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
    },
    "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "user": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "email": "luizarnoldch@gmail.com",
      "public_name": "l",
      "avatar_url": null,
      "github_username": null
    },
    "product": {
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "metadata": {
        "max_gb_storage": "5"
      },
      "prices": [
        {
          "created_at": "2026-03-28T00:58:02.025930Z",
          "modified_at": null,
          "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
          "source": "catalog",
          "amount_type": "fixed",
          "price_currency": "pen",
          "tax_behavior": null,
          "is_archived": false,
          "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
          "type": "recurring",
          "recurring_interval": "month",
          "price_amount": 4000
        }
      ],
      "benefits": [
        {
          "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
          "created_at": "2026-03-28T00:20:23.755611Z",
          "modified_at": null,
          "type": "custom",
          "description": "expedientes ilimitados",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
          "metadata": {},
          "properties": {
            "note": null
          },
          "is_tax_applicable": true
        },
        {
          "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
          "created_at": "2026-03-28T00:43:28.934219Z",
          "modified_at": null,
          "type": "custom",
          "description": "5 GB de almacenamiento",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
          "metadata": {},
          "properties": {
            "note": null
          },
          "is_tax_applicable": true
        }
      ],
      "medias": [],
      "attached_custom_fields": []
    },
    "discount": null,
    "price": {
      "created_at": "2026-03-28T00:58:02.025930Z",
      "modified_at": null,
      "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "source": "catalog",
      "amount_type": "fixed",
      "price_currency": "pen",
      "tax_behavior": null,
      "is_archived": false,
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "type": "recurring",
      "recurring_interval": "month",
      "price_amount": 4000
    },
    "prices": [
      {
        "created_at": "2026-03-28T00:58:02.025930Z",
        "modified_at": null,
        "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
        "source": "catalog",
        "amount_type": "fixed",
        "price_currency": "pen",
        "tax_behavior": null,
        "is_archived": false,
        "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
        "type": "recurring",
        "recurring_interval": "month",
        "price_amount": 4000
      }
    ],
    "meters": [],
    "pending_update": null
  }
}
```

# Order Created

```json
{
  "type": "order.created",
  "timestamp": "2026-03-30T16:13:53.918004Z",
  "data": {
    "id": "d786592b-1f8d-4a4c-8015-ea9cebba6007",
    "created_at": "2026-03-30T16:13:53.888894Z",
    "modified_at": null,
    "status": "paid",
    "paid": true,
    "subtotal_amount": 0,
    "discount_amount": 0,
    "net_amount": 0,
    "tax_amount": 0,
    "total_amount": 0,
    "applied_balance_amount": 0,
    "due_amount": 0,
    "refunded_amount": 0,
    "refunded_tax_amount": 0,
    "currency": "pen",
    "billing_reason": "subscription_create",
    "billing_name": "luiz arnold chavez burgos",
    "billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "invoice_number": "BETTER-AUTH-POLAR-THXQKSLQQS-0002",
    "is_invoice_generated": false,
    "seats": null,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "product_price_id": null,
    "discount_id": null,
    "subscription_id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
    "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "metadata": {},
    "custom_field_data": {},
    "platform_fee_amount": 0,
    "platform_fee_currency": null,
    "customer": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "created_at": "2026-03-30T16:07:05.856477Z",
      "modified_at": "2026-03-30T16:13:53.881116Z",
      "metadata": {
        "name": "Luiz Arnold Chavez Burgos",
        "myCustomProperty": 123
      },
      "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
      "email": "luizarnoldch@gmail.com",
      "email_verified": false,
      "type": "individual",
      "name": "luiz arnold chavez burgos",
      "billing_address": {
        "line1": null,
        "line2": null,
        "postal_code": null,
        "city": null,
        "state": null,
        "country": "PE"
      },
      "tax_id": null,
      "locale": "en-US",
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "deleted_at": null,
      "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
    },
    "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "user": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "email": "luizarnoldch@gmail.com",
      "public_name": "l",
      "avatar_url": null,
      "github_username": null
    },
    "product": {
      "metadata": {
        "max_gb_storage": "5"
      },
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
    },
    "product_price": null,
    "discount": null,
    "subscription": {
      "metadata": {},
      "created_at": "2026-03-30T16:13:53.540276Z",
      "modified_at": null,
      "id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
      "amount": 4000,
      "currency": "pen",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "status": "trialing",
      "current_period_start": "2026-03-30T16:13:53.532380Z",
      "current_period_end": "2026-04-30T16:13:49.739867Z",
      "trial_start": "2026-03-30T16:13:53.532380Z",
      "trial_end": "2026-04-30T16:13:49.739867Z",
      "cancel_at_period_end": false,
      "canceled_at": null,
      "started_at": "2026-03-30T16:13:53.532380Z",
      "ends_at": null,
      "ended_at": null,
      "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "discount_id": null,
      "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
      "seats": null,
      "customer_cancellation_reason": null,
      "customer_cancellation_comment": null,
      "price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71"
    },
    "items": [
      {
        "created_at": "2026-03-30T16:13:53.895356Z",
        "modified_at": null,
        "id": "f39551b4-6b0e-4d51-ab5c-fe960da9015f",
        "label": "Trial period for Independiente (Mar 30, 2026 - Apr 30, 2026)",
        "amount": 0,
        "tax_amount": 0,
        "proration": false,
        "product_price_id": null
      }
    ],
    "description": "Independiente",
    "amount": 0,
    "from_balance_amount": 0
  }
}
```

# Order Updated

```json
{
  "type": "order.updated",
  "timestamp": "2026-03-30T16:13:53.947287Z",
  "data": {
    "id": "d786592b-1f8d-4a4c-8015-ea9cebba6007",
    "created_at": "2026-03-30T16:13:53.888894Z",
    "modified_at": null,
    "status": "paid",
    "paid": true,
    "subtotal_amount": 0,
    "discount_amount": 0,
    "net_amount": 0,
    "tax_amount": 0,
    "total_amount": 0,
    "applied_balance_amount": 0,
    "due_amount": 0,
    "refunded_amount": 0,
    "refunded_tax_amount": 0,
    "currency": "pen",
    "billing_reason": "subscription_create",
    "billing_name": "luiz arnold chavez burgos",
    "billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "invoice_number": "BETTER-AUTH-POLAR-THXQKSLQQS-0002",
    "is_invoice_generated": false,
    "seats": null,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "product_price_id": null,
    "discount_id": null,
    "subscription_id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
    "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "metadata": {},
    "custom_field_data": {},
    "platform_fee_amount": 0,
    "platform_fee_currency": null,
    "customer": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "created_at": "2026-03-30T16:07:05.856477Z",
      "modified_at": "2026-03-30T16:13:53.881116Z",
      "metadata": {
        "name": "Luiz Arnold Chavez Burgos",
        "myCustomProperty": 123
      },
      "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
      "email": "luizarnoldch@gmail.com",
      "email_verified": false,
      "type": "individual",
      "name": "luiz arnold chavez burgos",
      "billing_address": {
        "line1": null,
        "line2": null,
        "postal_code": null,
        "city": null,
        "state": null,
        "country": "PE"
      },
      "tax_id": null,
      "locale": "en-US",
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "deleted_at": null,
      "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
    },
    "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "user": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "email": "luizarnoldch@gmail.com",
      "public_name": "l",
      "avatar_url": null,
      "github_username": null
    },
    "product": {
      "metadata": {
        "max_gb_storage": "5"
      },
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
    },
    "product_price": null,
    "discount": null,
    "subscription": {
      "metadata": {},
      "created_at": "2026-03-30T16:13:53.540276Z",
      "modified_at": null,
      "id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
      "amount": 4000,
      "currency": "pen",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "status": "trialing",
      "current_period_start": "2026-03-30T16:13:53.532380Z",
      "current_period_end": "2026-04-30T16:13:49.739867Z",
      "trial_start": "2026-03-30T16:13:53.532380Z",
      "trial_end": "2026-04-30T16:13:49.739867Z",
      "cancel_at_period_end": false,
      "canceled_at": null,
      "started_at": "2026-03-30T16:13:53.532380Z",
      "ends_at": null,
      "ended_at": null,
      "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "discount_id": null,
      "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
      "seats": null,
      "customer_cancellation_reason": null,
      "customer_cancellation_comment": null,
      "price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71"
    },
    "items": [
      {
        "created_at": "2026-03-30T16:13:53.895356Z",
        "modified_at": null,
        "id": "f39551b4-6b0e-4d51-ab5c-fe960da9015f",
        "label": "Trial period for Independiente (Mar 30, 2026 - Apr 30, 2026)",
        "amount": 0,
        "tax_amount": 0,
        "proration": false,
        "product_price_id": null
      }
    ],
    "description": "Independiente",
    "amount": 0,
    "from_balance_amount": 0
  }
}
```

# Order Paid

```json
{
  "type": "order.paid",
  "timestamp": "2026-03-30T16:13:53.975537Z",
  "data": {
    "id": "d786592b-1f8d-4a4c-8015-ea9cebba6007",
    "created_at": "2026-03-30T16:13:53.888894Z",
    "modified_at": null,
    "status": "paid",
    "paid": true,
    "subtotal_amount": 0,
    "discount_amount": 0,
    "net_amount": 0,
    "tax_amount": 0,
    "total_amount": 0,
    "applied_balance_amount": 0,
    "due_amount": 0,
    "refunded_amount": 0,
    "refunded_tax_amount": 0,
    "currency": "pen",
    "billing_reason": "subscription_create",
    "billing_name": "luiz arnold chavez burgos",
    "billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "invoice_number": "BETTER-AUTH-POLAR-THXQKSLQQS-0002",
    "is_invoice_generated": false,
    "seats": null,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "product_price_id": null,
    "discount_id": null,
    "subscription_id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
    "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "metadata": {},
    "custom_field_data": {},
    "platform_fee_amount": 0,
    "platform_fee_currency": null,
    "customer": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "created_at": "2026-03-30T16:07:05.856477Z",
      "modified_at": "2026-03-30T16:13:53.881116Z",
      "metadata": {
        "name": "Luiz Arnold Chavez Burgos",
        "myCustomProperty": 123
      },
      "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
      "email": "luizarnoldch@gmail.com",
      "email_verified": false,
      "type": "individual",
      "name": "luiz arnold chavez burgos",
      "billing_address": {
        "line1": null,
        "line2": null,
        "postal_code": null,
        "city": null,
        "state": null,
        "country": "PE"
      },
      "tax_id": null,
      "locale": "en-US",
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "deleted_at": null,
      "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
    },
    "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "user": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "email": "luizarnoldch@gmail.com",
      "public_name": "l",
      "avatar_url": null,
      "github_username": null
    },
    "product": {
      "metadata": {
        "max_gb_storage": "5"
      },
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
    },
    "product_price": null,
    "discount": null,
    "subscription": {
      "metadata": {},
      "created_at": "2026-03-30T16:13:53.540276Z",
      "modified_at": null,
      "id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
      "amount": 4000,
      "currency": "pen",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "status": "trialing",
      "current_period_start": "2026-03-30T16:13:53.532380Z",
      "current_period_end": "2026-04-30T16:13:49.739867Z",
      "trial_start": "2026-03-30T16:13:53.532380Z",
      "trial_end": "2026-04-30T16:13:49.739867Z",
      "cancel_at_period_end": false,
      "canceled_at": null,
      "started_at": "2026-03-30T16:13:53.532380Z",
      "ends_at": null,
      "ended_at": null,
      "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "discount_id": null,
      "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
      "seats": null,
      "customer_cancellation_reason": null,
      "customer_cancellation_comment": null,
      "price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71"
    },
    "items": [
      {
        "created_at": "2026-03-30T16:13:53.895356Z",
        "modified_at": null,
        "id": "f39551b4-6b0e-4d51-ab5c-fe960da9015f",
        "label": "Trial period for Independiente (Mar 30, 2026 - Apr 30, 2026)",
        "amount": 0,
        "tax_amount": 0,
        "proration": false,
        "product_price_id": null
      }
    ],
    "description": "Independiente",
    "amount": 0,
    "from_balance_amount": 0
  }
}
```

# Checkout Updated

```json
{
  "type": "checkout.updated",
  "timestamp": "2026-03-30T16:13:54.003075Z",
  "data": {
    "id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "created_at": "2026-03-30T16:13:36.539565Z",
    "modified_at": "2026-03-30T16:13:50.947326Z",
    "custom_field_data": {},
    "payment_processor": "stripe",
    "status": "succeeded",
    "client_secret": "polar_c_xIwqQpgWH81NGlth3f81xPIl0Fe7YzlBCfv9p4diwpk",
    "url": "https://sandbox.polar.sh/checkout/polar_c_xIwqQpgWH81NGlth3f81xPIl0Fe7YzlBCfv9p4diwpk",
    "expires_at": "2026-03-31T16:13:36.539537Z",
    "success_url": "http://localhost:3000/dashboard/payments?checkout_id=f90a1b3b-63f8-4176-9022-9b917da04c88",
    "return_url": "http://localhost:3000/dashboard/payments",
    "embed_origin": null,
    "amount": 4000,
    "seats": null,
    "min_seats": null,
    "max_seats": null,
    "discount_amount": 0,
    "net_amount": 4000,
    "tax_amount": 0,
    "total_amount": 4000,
    "currency": "pen",
    "allow_trial": true,
    "active_trial_interval": "month",
    "active_trial_interval_count": 1,
    "trial_end": "2026-04-30T16:13:49.739867Z",
    "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "product_price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
    "discount_id": null,
    "allow_discount_codes": true,
    "require_billing_address": false,
    "is_discount_applicable": true,
    "is_free_product_price": false,
    "is_payment_required": false,
    "is_payment_setup_required": true,
    "is_payment_form_required": true,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "is_business_customer": false,
    "customer_name": "luiz arnold chavez burgos",
    "customer_email": "luizarnoldch@gmail.com",
    "customer_ip_address": "2001:1388:1760:1c0f:505d:8e0f:ffa7:7aaa",
    "customer_billing_name": null,
    "customer_billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "customer_tax_id": null,
    "locale": "en-US",
    "payment_processor_metadata": {
      "customer_id": "cus_UFCo9jyBtzq8ig",
      "intent_status": "succeeded",
      "publishable_key": "pk_test_51Q025lDIA9pgt25rcR0OlBAZmrUlTJlbGDlCiumahhlqiHSzcBJvtKTsXptB0FXgBcrJ1nG6LbIZGMRZrohO0JZN00MQPYIDJu",
      "intent_client_secret": "seti_1TGiRmDIA9pgt25rJubVAcDu_secret_UFCrDh9kQfe1OtTeOb45y0RIHK3x3I4"
    },
    "customer_billing_address_fields": {
      "country": true,
      "state": false,
      "city": false,
      "postal_code": false,
      "line1": false,
      "line2": false
    },
    "billing_address_fields": {
      "country": "required",
      "state": "disabled",
      "city": "disabled",
      "postal_code": "disabled",
      "line1": "disabled",
      "line2": "disabled"
    },
    "trial_interval": null,
    "trial_interval_count": null,
    "metadata": {},
    "external_customer_id": null,
    "customer_external_id": null,
    "products": [
      {
        "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
        "created_at": "2026-03-28T00:23:48.517978Z",
        "modified_at": "2026-03-28T01:42:47.720189Z",
        "trial_interval": "month",
        "trial_interval_count": 1,
        "name": "Independiente",
        "description": null,
        "visibility": "public",
        "recurring_interval": "month",
        "recurring_interval_count": 1,
        "is_recurring": true,
        "is_archived": false,
        "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
        "prices": [
          {
            "created_at": "2026-03-28T00:58:02.025930Z",
            "modified_at": null,
            "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
            "source": "catalog",
            "amount_type": "fixed",
            "price_currency": "pen",
            "tax_behavior": null,
            "is_archived": false,
            "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
            "type": "recurring",
            "recurring_interval": "month",
            "price_amount": 4000
          }
        ],
        "benefits": [
          {
            "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
            "created_at": "2026-03-28T00:20:23.755611Z",
            "modified_at": null,
            "type": "custom",
            "description": "expedientes ilimitados",
            "selectable": true,
            "deletable": true,
            "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
          },
          {
            "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
            "created_at": "2026-03-28T00:43:28.934219Z",
            "modified_at": null,
            "type": "custom",
            "description": "5 GB de almacenamiento",
            "selectable": true,
            "deletable": true,
            "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
          }
        ],
        "medias": []
      }
    ],
    "product": {
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "prices": [
        {
          "created_at": "2026-03-28T00:58:02.025930Z",
          "modified_at": null,
          "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
          "source": "catalog",
          "amount_type": "fixed",
          "price_currency": "pen",
          "tax_behavior": null,
          "is_archived": false,
          "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
          "type": "recurring",
          "recurring_interval": "month",
          "price_amount": 4000
        }
      ],
      "benefits": [
        {
          "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
          "created_at": "2026-03-28T00:20:23.755611Z",
          "modified_at": null,
          "type": "custom",
          "description": "expedientes ilimitados",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
        },
        {
          "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
          "created_at": "2026-03-28T00:43:28.934219Z",
          "modified_at": null,
          "type": "custom",
          "description": "5 GB de almacenamiento",
          "selectable": true,
          "deletable": true,
          "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
        }
      ],
      "medias": []
    },
    "product_price": {
      "created_at": "2026-03-28T00:58:02.025930Z",
      "modified_at": null,
      "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "source": "catalog",
      "amount_type": "fixed",
      "price_currency": "pen",
      "tax_behavior": null,
      "is_archived": false,
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "type": "recurring",
      "recurring_interval": "month",
      "price_amount": 4000
    },
    "prices": {
      "260ea636-e7ac-452e-ae4c-8c0db35365ca": [
        {
          "created_at": "2026-03-28T00:58:02.025930Z",
          "modified_at": null,
          "id": "53cad27d-4727-4b99-843b-66459e5bcabd",
          "source": "catalog",
          "amount_type": "fixed",
          "price_currency": "pen",
          "tax_behavior": null,
          "is_archived": false,
          "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
          "type": "recurring",
          "recurring_interval": "month",
          "price_amount": 4000
        }
      ]
    },
    "discount": null,
    "subscription_id": null,
    "attached_custom_fields": [],
    "customer_metadata": {},
    "subtotal_amount": 4000
  }
}
```

# Order Updated

```json
{
  "type": "order.updated",
  "timestamp": "2026-03-30T16:13:54.511645Z",
  "data": {
    "id": "d786592b-1f8d-4a4c-8015-ea9cebba6007",
    "created_at": "2026-03-30T16:13:53.888894Z",
    "modified_at": "2026-03-30T16:13:54.485675Z",
    "status": "paid",
    "paid": true,
    "subtotal_amount": 0,
    "discount_amount": 0,
    "net_amount": 0,
    "tax_amount": 0,
    "total_amount": 0,
    "applied_balance_amount": 0,
    "due_amount": 0,
    "refunded_amount": 0,
    "refunded_tax_amount": 0,
    "currency": "pen",
    "billing_reason": "subscription_create",
    "billing_name": "luiz arnold chavez burgos",
    "billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "invoice_number": "BETTER-AUTH-POLAR-THXQKSLQQS-0002",
    "is_invoice_generated": true,
    "seats": null,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
    "product_price_id": null,
    "discount_id": null,
    "subscription_id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
    "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
    "metadata": {},
    "custom_field_data": {},
    "platform_fee_amount": 0,
    "platform_fee_currency": null,
    "customer": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "created_at": "2026-03-30T16:07:05.856477Z",
      "modified_at": "2026-03-30T16:13:53.881116Z",
      "metadata": {
        "name": "Luiz Arnold Chavez Burgos",
        "myCustomProperty": 123
      },
      "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
      "email": "luizarnoldch@gmail.com",
      "email_verified": false,
      "type": "individual",
      "name": "luiz arnold chavez burgos",
      "billing_address": {
        "line1": null,
        "line2": null,
        "postal_code": null,
        "city": null,
        "state": null,
        "country": "PE"
      },
      "tax_id": null,
      "locale": "en-US",
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "deleted_at": null,
      "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
    },
    "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "user": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "email": "luizarnoldch@gmail.com",
      "public_name": "l",
      "avatar_url": null,
      "github_username": null
    },
    "product": {
      "metadata": {
        "max_gb_storage": "5"
      },
      "id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "created_at": "2026-03-28T00:23:48.517978Z",
      "modified_at": "2026-03-28T01:42:47.720189Z",
      "trial_interval": "month",
      "trial_interval_count": 1,
      "name": "Independiente",
      "description": null,
      "visibility": "public",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "is_recurring": true,
      "is_archived": false,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba"
    },
    "product_price": null,
    "discount": null,
    "subscription": {
      "metadata": {},
      "created_at": "2026-03-30T16:13:53.540276Z",
      "modified_at": null,
      "id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
      "amount": 4000,
      "currency": "pen",
      "recurring_interval": "month",
      "recurring_interval_count": 1,
      "status": "trialing",
      "current_period_start": "2026-03-30T16:13:53.532380Z",
      "current_period_end": "2026-04-30T16:13:49.739867Z",
      "trial_start": "2026-03-30T16:13:53.532380Z",
      "trial_end": "2026-04-30T16:13:49.739867Z",
      "cancel_at_period_end": false,
      "canceled_at": null,
      "started_at": "2026-03-30T16:13:53.532380Z",
      "ends_at": null,
      "ended_at": null,
      "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
      "discount_id": null,
      "checkout_id": "f90a1b3b-63f8-4176-9022-9b917da04c88",
      "seats": null,
      "customer_cancellation_reason": null,
      "customer_cancellation_comment": null,
      "price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
      "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71"
    },
    "items": [
      {
        "created_at": "2026-03-30T16:13:53.895356Z",
        "modified_at": null,
        "id": "f39551b4-6b0e-4d51-ab5c-fe960da9015f",
        "label": "Trial period for Independiente (Mar 30, 2026 - Apr 30, 2026)",
        "amount": 0,
        "tax_amount": 0,
        "proration": false,
        "product_price_id": null
      }
    ],
    "description": "Independiente",
    "amount": 0,
    "from_balance_amount": 0
  }
}
```

# Benefit Granded Created

```json
{
  "type": "benefit_grant.created",
  "timestamp": "2026-03-30T16:13:55.487769Z",
  "data": {
    "created_at": "2026-03-30T16:13:55.458217Z",
    "modified_at": null,
    "id": "bc40abed-a26d-41c4-a109-898be1c6039a",
    "granted_at": "2026-03-30T16:13:55.456732Z",
    "is_granted": true,
    "revoked_at": null,
    "is_revoked": false,
    "subscription_id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
    "order_id": null,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "member_id": "ebd66e14-51a5-455d-8d7f-62ef0fb1a6d9",
    "benefit_id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
    "error": null,
    "customer": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "created_at": "2026-03-30T16:07:05.856477Z",
      "modified_at": "2026-03-30T16:13:53.881116Z",
      "metadata": {
        "name": "Luiz Arnold Chavez Burgos",
        "myCustomProperty": 123
      },
      "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
      "email": "luizarnoldch@gmail.com",
      "email_verified": false,
      "type": "individual",
      "name": "luiz arnold chavez burgos",
      "billing_address": {
        "line1": null,
        "line2": null,
        "postal_code": null,
        "city": null,
        "state": null,
        "country": "PE"
      },
      "tax_id": null,
      "locale": "en-US",
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "deleted_at": null,
      "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
    },
    "member": {
      "id": "ebd66e14-51a5-455d-8d7f-62ef0fb1a6d9",
      "created_at": "2026-03-30T16:07:05.867886Z",
      "modified_at": null,
      "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "email": "luizarnoldch@gmail.com",
      "name": "Luiz Arnold Chavez Burgos",
      "external_id": null,
      "role": "owner"
    },
    "benefit": {
      "id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
      "created_at": "2026-03-28T00:20:23.755611Z",
      "modified_at": null,
      "type": "custom",
      "description": "expedientes ilimitados",
      "selectable": true,
      "deletable": true,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "metadata": {},
      "properties": {
        "note": null
      },
      "is_tax_applicable": true
    },
    "properties": {},
    "previous_properties": {},
    "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71"
  }
}
```

# Benefit Granded Created

```json
{
  "type": "benefit_grant.created",
  "timestamp": "2026-03-30T16:13:55.521359Z",
  "data": {
    "created_at": "2026-03-30T16:13:55.493802Z",
    "modified_at": null,
    "id": "8578b927-00ff-4f63-8d74-58266870bbcb",
    "granted_at": "2026-03-30T16:13:55.492421Z",
    "is_granted": true,
    "revoked_at": null,
    "is_revoked": false,
    "subscription_id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
    "order_id": null,
    "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "member_id": "ebd66e14-51a5-455d-8d7f-62ef0fb1a6d9",
    "benefit_id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
    "error": null,
    "customer": {
      "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "created_at": "2026-03-30T16:07:05.856477Z",
      "modified_at": "2026-03-30T16:13:53.881116Z",
      "metadata": {
        "name": "Luiz Arnold Chavez Burgos",
        "myCustomProperty": 123
      },
      "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
      "email": "luizarnoldch@gmail.com",
      "email_verified": false,
      "type": "individual",
      "name": "luiz arnold chavez burgos",
      "billing_address": {
        "line1": null,
        "line2": null,
        "postal_code": null,
        "city": null,
        "state": null,
        "country": "PE"
      },
      "tax_id": null,
      "locale": "en-US",
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "deleted_at": null,
      "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
    },
    "member": {
      "id": "ebd66e14-51a5-455d-8d7f-62ef0fb1a6d9",
      "created_at": "2026-03-30T16:07:05.867886Z",
      "modified_at": null,
      "customer_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
      "email": "luizarnoldch@gmail.com",
      "name": "Luiz Arnold Chavez Burgos",
      "external_id": null,
      "role": "owner"
    },
    "benefit": {
      "id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
      "created_at": "2026-03-28T00:43:28.934219Z",
      "modified_at": null,
      "type": "custom",
      "description": "5 GB de almacenamiento",
      "selectable": true,
      "deletable": true,
      "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
      "metadata": {},
      "properties": {
        "note": null
      },
      "is_tax_applicable": true
    },
    "properties": {},
    "previous_properties": {},
    "user_id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71"
  }
}
```

# Customer State Changed

```json
{
  "type": "customer.state_changed",
  "timestamp": "2026-03-30T16:13:57.116896Z",
  "data": {
    "id": "02e8e472-4eb8-4772-9af4-7bc7a70d3d71",
    "created_at": "2026-03-30T16:07:05.856477Z",
    "modified_at": "2026-03-30T16:13:53.881116Z",
    "metadata": {
      "name": "Luiz Arnold Chavez Burgos",
      "myCustomProperty": 123
    },
    "external_id": "bd2a202e-1a19-43c0-a29c-91e37f8bc708",
    "email": "luizarnoldch@gmail.com",
    "email_verified": false,
    "type": "individual",
    "name": "luiz arnold chavez burgos",
    "billing_address": {
      "line1": null,
      "line2": null,
      "postal_code": null,
      "city": null,
      "state": null,
      "country": "PE"
    },
    "tax_id": null,
    "locale": "en-US",
    "organization_id": "cba82639-1b03-43c2-8b3c-114677d043ba",
    "deleted_at": null,
    "active_subscriptions": [
      {
        "id": "d1b800fe-457a-4b3d-81f3-d6d505fa075e",
        "created_at": "2026-03-30T16:13:53.540276Z",
        "modified_at": null,
        "custom_field_data": {},
        "metadata": {},
        "status": "trialing",
        "amount": 4000,
        "currency": "pen",
        "recurring_interval": "month",
        "current_period_start": "2026-03-30T16:13:53.532380Z",
        "current_period_end": "2026-04-30T16:13:49.739867Z",
        "trial_start": "2026-03-30T16:13:53.532380Z",
        "trial_end": "2026-04-30T16:13:49.739867Z",
        "cancel_at_period_end": false,
        "canceled_at": null,
        "started_at": "2026-03-30T16:13:53.532380Z",
        "ends_at": null,
        "product_id": "260ea636-e7ac-452e-ae4c-8c0db35365ca",
        "discount_id": null,
        "price_id": "53cad27d-4727-4b99-843b-66459e5bcabd",
        "meters": []
      }
    ],
    "granted_benefits": [
      {
        "id": "8578b927-00ff-4f63-8d74-58266870bbcb",
        "created_at": "2026-03-30T16:13:55.493802Z",
        "modified_at": null,
        "granted_at": "2026-03-30T16:13:55.492421Z",
        "benefit_id": "2b17707d-4be8-4599-abdb-1a8faca089e5",
        "benefit_type": "custom",
        "benefit_metadata": {},
        "properties": {}
      },
      {
        "id": "bc40abed-a26d-41c4-a109-898be1c6039a",
        "created_at": "2026-03-30T16:13:55.458217Z",
        "modified_at": null,
        "granted_at": "2026-03-30T16:13:55.456732Z",
        "benefit_id": "0dfa0f51-4e03-47fa-b080-5e44f66d4803",
        "benefit_type": "custom",
        "benefit_metadata": {},
        "properties": {}
      }
    ],
    "active_meters": [],
    "avatar_url": "https://www.gravatar.com/avatar/7f9b5e46abb3933f038a2bc629e7169ba2bf1ac1456357f61cc4057f192fbde5?d=404"
  }
}
```
