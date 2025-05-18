# AOSAngular19

Dieses Projekt demonstriert die Nutzung von [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) innerhalb einer Angular-19-Anwendung. Ziel ist es, **Scroll-basierte Animationen** zu integrieren, um Inhalte beim Scrollen ansprechend erscheinen zu lassen.

## 🔧 Setup & Installation

### Voraussetzungen

- Node.js
- Angular CLI (`npm install -g @angular/cli`)

### Projekt installieren und starten

```bash
git clone <REPO_URL>
cd AOS-Angular-19
npm install
ng serve
```

Projekt öffnen unter:  
👉 `http://localhost:4200/`

---

## 🎯 Ziel des Projekts

Die App demonstriert die Einbindung von AOS, um eine moderne One-Page-Scroll-Seite mit Animationen zu erstellen. Die Startseite (`MainPage`) enthält drei wiederverwendete **Section-Komponenten**, die jeweils 100% der Viewport-Höhe einnehmen. Innerhalb jeder Section wird ein halbhoher Kasten (`50vh`) beim Erreichen eingeblendet (per Scroll-Animation).

Es gibt zwei Seiten via Routing:

- `/` → **MainPage** (mit 3 animierten Sektionen)
- `/imprint` → **Impressum**

---

## 📦 AOS Installation

```bash
npm install aos --save
npm install --save-dev @types/aos
```

### angular.json Konfiguration:

```json
"styles": [
  "node_modules/aos/dist/aos.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/aos/dist/aos.js"
]
```

### AOS in main.ts initialisieren:

```ts
import * as AOS from 'aos';

AOS.init();
```

Falls benötigt, z. B. bei Lazy-Loading oder dynamischem Content:

```ts
import { AfterViewInit } from '@angular/core';

ngAfterViewInit(): void {
  AOS.refresh();
}
```

---

## 📁 Projektstruktur

```txt
src/
├── app/
│   ├── components/
│   │   └── section/
│   │       ├── section.component.ts
│   │       ├── section.component.html
│   │       └── section.component.scss
│   ├── pages/
│   │   ├── mainpage/
│   │   │   ├── mainpage.component.ts
│   │   │   ├── mainpage.component.html
│   │   │   └── mainpage.component.scss
│   │   └── imprint/
│   └── app-routing.module.ts
```

Die **Section-Komponente** wird dreimal in der MainPage verwendet und zeigt beim Scrollen animierte Inhalte an.

---

## 📸 AOS Beispiel in HTML

```html
<div class="section">
  <div class="content" data-aos="fade-up">
    <h2>Section Title</h2>
    <p>Text, der beim Scrollen erscheint.</p>
  </div>
</div>
```

### Beispiel-Styles (SCSS):

```scss
.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  height: 50vh;
  width: 80%;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
```

---

## ✅ Zusammenfassung

Dieses Projekt zeigt, wie man AOS in einer Angular-Anwendung nutzt:

- Modularer Aufbau mit Angular-Komponenten
- Animierte Inhalte per Scroll
- Reusability der Komponenten
- Klar getrenntes Routing mit `MainPage` und `Impressum`

---

## 📚 Weitere Infos

- [AOS Dokumentation](https://michalsnik.github.io/aos/)
- [Angular CLI Guide](https://angular.dev/tools/cli)