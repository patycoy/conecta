# Guía para Conectar la API a la Base de Datos de Supabase

Este documento explica cómo modificar la ruta de la API para que consulte los datos desde Supabase en lugar de usar el archivo local `db.ts`.

## Archivo a Modificar

El único archivo que necesita cambios es: `app/api/negocios/route.ts`

## Pasos

1.  **Abrir el archivo:**
    Abre `app/api/negocios/route.ts`.

2.  **Importar el cliente de Supabase:**
    Necesitamos importar la función `createClient` que preparamos anteriormente. Elimina la importación del `array` local y añade la del cliente de Supabase.

    ```typescript
    // Elimina esta línea:
    import { negocios } from "@/db/db";

    // Añade esta línea:
    import { createClient } from "@/lib/supabase/client";
    ```

3.  **Modificar la función `GET`:**
    Ahora, actualiza la función `GET` para que sea `async` y use el cliente de Supabase para hacer una consulta a tu tabla. Asumiremos que tu tabla se llama `negocios`.

    ```typescript
    // Reemplaza la función GET actual con esta:
    export async function GET() {
      // Crea una instancia del cliente de Supabase
      const supabase = createClient();

      try {
        // Realiza la consulta a la tabla 'negocios' para seleccionar todos los registros
        const { data: negocios, error } = await supabase
          .from('negocios') // Asegúrate de que 'negocios' sea el nombre de tu tabla en Supabase
          .select('*');

        // Si hay un error en la consulta, devuélvelo
        if (error) {
          console.error("Error fetching from Supabase:", error);
          return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        // Si la consulta es exitosa, devuelve los datos
        return new Response(JSON.stringify(negocios), { status: 200 });

      } catch (e) {
        // Captura cualquier otro error inesperado
        console.error("Unexpected error:", e);
        return new Response(JSON.stringify({ error: "An unexpected error occurred." }), { status: 500 });
      }
    }
    ```

## Resumen del Código Final

Una vez completados los pasos, tu archivo `app/api/negocios/route.ts` debería verse así:

```typescript
import { createClient } from "@/lib/supabase/client";

export async function GET() {
  const supabase = createClient();

  try {
    const { data: negocios, error } = await supabase
      .from('negocios')
      .select('*');

    if (error) {
      console.error("Error fetching from Supabase:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(negocios), { status: 200 });

  } catch (e) {
    console.error("Unexpected error:", e);
    return new Response(JSON.stringify({ error: "An unexpected error occurred." }), { status: 500 });
  }
}
```

Con estos cambios, la aplicación obtendrá los datos directamente desde tu base de datos en la nube cada vez que alguien visite una página.
