# Carta digital (`/carta`) — guía de mantenimiento

La carta es **estática**: vive en archivos TypeScript + imágenes locales optimizadas
por Astro. No hay CMS, backend ni base de datos. Actualizar = editar datos → validar
→ build → deploy.

## Estructura

```
src/data/menu/
  berraco.ts    Cocina Berraco (entradas, para compartir, platos, adicionales, especiales)
  amaya.ts      Cocina AMAYA (entradas, fuertes, postres)
  bebidas.ts    Barra (cócteles, vinos, hervidos, cervezas, licores, sin licor)
  index.ts      Agrega todo + selectores (KITCHENS, getCategories, getSignatureItems…)

src/assets/menu/{berraco,amaya,bebidas}/<slug>.jpg   Imágenes ("masters" web ~1600px)

src/components/berraco/carta/   Componentes .astro de la página
src/pages/carta.astro           La página /carta
scripts/validate-menu.ts        Validación de integridad
```

## Modelo de datos (`MenuItem`)

```ts
{
  id: 'fogoncitos',              // slug único en toda la carta (= nombre de imagen)
  name: 'Fogoncitos',
  description: '…',              // opcional
  prices: [{ amount: 33900 }],   // COP como número; múltiples con label: [{label:'Jarra', amount:130000}]
  image: 'fogoncitos',           // opcional; basename en src/assets/menu/<kitchen>/
  tags: ['Premiada'],            // opcional
  signature: true,               // opcional; aparece en el carrusel "Destacados"
}
```

## Tareas comunes

### Cambiar un precio
Edita `amount` (número, sin `$` ni puntos) en el archivo de la cocina correspondiente.

### Agregar un producto
Añade un objeto `MenuItem` a la categoría correcta. `id` debe ser único.

### Eliminar un producto
Borra su objeto. Si tenía imagen, borra también `src/assets/menu/<kitchen>/<slug>.jpg`
(o el validador la marcará como huérfana — advertencia, no error).

### Agregar/cambiar una foto
1. Optimiza el original a un "master" web (preserva el encuadre; el recorte lo hace el CSS):
   ```bash
   convert ORIGINAL.jpg -auto-orient -strip -resize '1600x1600>' -interlace Plane -quality 82 \
     src/assets/menu/<kitchen>/<slug>.jpg
   ```
2. Pon `image: '<slug>'` en el ítem. Astro genera AVIF/WebP responsive en el build.
   **Nunca** guardes el JPEG original gigante ni RAW en el repo.

## Validar y publicar

```bash
node --experimental-strip-types scripts/validate-menu.ts   # conteo, precios, ids, imágenes
pnpm build                                                 # falla si hay imports/imágenes rotas
pnpm preview                                               # revisar en http://localhost:4321/carta
```

El validador comprueba: nº de productos, nombres/precios presentes, ids únicos,
que toda imagen referenciada exista y que no haya imágenes huérfanas.
