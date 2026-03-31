# Checkout Created

```json
{
  "type": "checkout.created",
  "timestamp": "2026-03-30T06:43:20.335023Z",
  "data": {
    "id": "6da45695-be85-4e2a-bb71-2c26525ab074",
    "created_at": "2026-03-30T06:43:20.308122Z",
    "modified_at": null,
    "custom_field_data": {},
    "payment_processor": "stripe",
    "status": "open",
    "client_secret": "polar_c_JfNYM9sSEZP0heK504F8CCU35Rz7ExlZ5MDZQ2Y6C9j",
    "url": "https://sandbox.polar.sh/checkout/polar_c_JfNYM9sSEZP0heK504F8CCU35Rz7ExlZ5MDZQ2Y6C9j",
    "expires_at": "2026-03-31T06:43:20.308097Z",
    "success_url": "http://localhost:3000/dashboard/payments?checkout_id=6da45695-be85-4e2a-bb71-2c26525ab074",
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
    "trial_end": "2026-04-30T06:43:20.075191Z",
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
    "customer_ip_address": "2001:1388:1760:1c0f:240f:a955:53f1:6e11",
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
