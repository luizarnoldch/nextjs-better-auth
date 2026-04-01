Polar.sh maneja el ciclo de vida de las suscripciones emitiendo eventos específicos según el estado del pago y la intención del usuario. Entender el flujo exacto es vital para no dar acceso prematuro ni cortar funciones antes de tiempo.

### 1. `subscription.created`

- **Qué es:** Se dispara en el momento exacto en que se genera el registro de la suscripción, pero **no garantiza que el pago haya sido procesado**. El estado de la suscripción suele ser _pending_.
- **Caso de uso:** Registrar la intención de compra en tu sistema. Guardas el ID de la suscripción en tu base de datos con un estado `pendiente` y le muestras al usuario una pantalla de _"Procesando tu pago, en breve tendrás acceso"_.

### 2. `subscription.active`

- **Qué es:** Confirma que la suscripción está oficialmente en marcha. Se emite cuando **el pago inicial se procesa con éxito** o cuando arranca un período de prueba gratuito (trial).
- **Caso de uso:** **Desbloquear los beneficios premium**. Aquí aprovisionas el acceso definitivo (por ejemplo, cambiando `role: 'free'` a `role: 'pro'` en tu base de datos) y envías un correo de bienvenida indicando que las funcionalidades ya están disponibles.

### 3. `subscription.updated`

- **Qué es:** Es un evento general o _catch-all_. Se emite ante cualquier modificación: cambios de plan, actualizaciones de metadatos o al renovarse un ciclo. Frecuentemente se dispara en conjunto con los demás eventos.
- **Caso de uso:** Gestionar **upgrades y downgrades**. Si un usuario cambia de un plan mensual a uno anual o sube de categoría, usas este webhook para actualizar sus límites de cuota (rate limits) y mantener tu base de datos sincronizada con Polar.

### 4. `subscription.canceled`

- **Qué es:** Indica que el usuario ha decidido cancelar, pero **la cancelación será efectiva al final del período de facturación actual**. El usuario mantiene su acceso por el tiempo que ya pagó (`cancel_at_period_end` pasa a _true_).
- **Caso de uso:** Flujo de retención y notificaciones. Envías un correo automático ofreciendo un descuento si decide quedarse. En tu plataforma, mantienes los beneficios activos pero muestras un banner visual que diga: _"Tu plan expirará al final de este mes"_.

### 5. `subscription.revoked`

- **Qué es:** La **terminación definitiva e inmediata**. Ocurre cuando se cumple la fecha límite de una suscripción cancelada, si el pago falla definitivamente, por fraude o si un administrador revoca manualmente el acceso.
- **Caso de uso:** **Cortar el acceso al producto**. Aquí debes degradar la cuenta del usuario de vuelta al nivel gratuito, bloquear las funciones de pago y retirar integraciones (por ejemplo, revocar automáticamente el acceso a un repositorio privado de GitHub o quitar un rol en Discord).

### 6. `subscription.uncanceled`

- **Qué es:** El usuario se arrepiente de su cancelación y **reactiva su suscripción** antes de que termine el período de gracia (es decir, antes de que llegue a `revoked`).
- **Caso de uso:** Limpiar el estado de cancelación. Quitas las alertas de "Expiración próxima" en tu interfaz, te aseguras de marcar la auto-renovación como activa en tu sistema y envías un correo de _"¡Qué bueno que te quedas con nosotros!"_.

---


