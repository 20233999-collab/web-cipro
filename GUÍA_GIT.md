# 🚀 Guía Maestra de Git y GitHub - Proyecto CIPRO

Esta guía contiene todo lo que necesitas saber para gestionar el código de este proyecto de manera segura y eficiente.

---

## 1. El Flujo de Trabajo Básico (Subir cambios)

Para subir tus cambios a GitHub, siempre sigue este orden en tu terminal (PowerShell o VS Code):

1. **`git status`**: Opcional, pero recomendado para ver qué archivos has modificado.
2. **`git add .`**: Prepara todos los archivos modificados para el commit.
3. **`git commit -m "Descripción de lo que hiciste"`**: Crea un "punto de guardado" local con un mensaje descriptivo.
4. **`git push origin main`**: Sube tus puntos de guardado locales a la nube (GitHub).

---

## 2. Cómo Volver atrás (El Botón de Pánico 🚨)

Si algo se rompe y quieres regresar a una versión que funcionaba, tienes varias opciones:

### A. Deshacer cambios que NO has guardado (Commit)
Si editaste un archivo, no has hecho `commit`, y quieres que vuelva a estar como al principio:
```powershell
git checkout -- nombre-del-archivo.tsx
# O para deshacer TODO lo que no has guardado:
git reset --hard
```

### B. Volver a una versión anterior (Después de un Commit)
1. Busca el ID del commit al que quieres volver:
   ```powershell
   git log --oneline -n 10
   ```
2. Copia el código de 7 caracteres (ej: `a1b2c3d`) y ejecuta:
   ```powershell
   git reset --hard a1b2c3d
   ```
   *⚠️ ADVERTENCIA: Esto borrará permanentemente todos los cambios hechos después de ese commit.*

---

## 3. Conceptos Clave de Git que debes conocer

- **Repositorio (Repo)**: La carpeta del proyecto que Git está vigilando.
- **Commit**: Una "foto" de tu código en un momento dado. Es un punto de restauración.
- **Main**: El nombre de la rama principal de tu código.
- **Remote (Origin)**: Es la versión de tu código que vive en los servidores de GitHub.
- **.gitignore**: Un archivo especial donde le decimos a Git qué carpetas ignorar (como `node_modules` que es muy pesada). **Nunca borres este archivo.**

---

## 4. Consideraciones y Buenas Prácticas

1. **Commit pequeño, commit seguido**: Es mejor hacer 10 commits pequeños que uno gigante. Facilita mucho volver atrás si algo falla.
2. **Mensajes descriptivos**: En lugar de poner "cambios", pon "ajuste de brillo en botón CTA". Tu "yo del futuro" te lo agradecerá.
3. **Sincronización**: Si trabajas desde otra PC, antes de empezar siempre haz un:
   ```powershell
   git pull origin main
   ```
   Esto descarga los últimos cambios de la nube a tu PC local.

---

## 5. Solución de Problemas Comunes

### "El término 'git' o 'npm' no se reconoce"
En Windows, a veces la terminal no encuentra las herramientas. Ejecuta esto para arreglarlo temporalmente en esa sesión:
```powershell
$env:Path += ";C:\Program Files\nodejs\"
```

### Conflictos de Mezcla (Merge Conflicts)
Ocurre si cambias la misma línea de código en GitHub y en tu PC al mismo tiempo. VS Code te mostrará los archivos en rojo. Deberás elegir qué versión mantener manualmente en el editor y luego hacer un nuevo commit.

---

## 6. Comandos Recetario Rápido

| Acción | Comando |
| :--- | :--- |
| Ver cambios | `git status` |
| Guardar todo | `git add .` |
| Confirmar | `git commit -m "mensaje"` |
| Subir a la nube | `git push origin main` |
| Bajar de la nube | `git pull origin main` |
| Ver historial | `git log --oneline` |
| Deshacer todo | `git reset --hard HEAD` |

---
*Guía generada por Antigravity para el proyecto CIPRO.*
