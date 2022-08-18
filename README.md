# 🎮 Frontend Developer Test Task

This project contains the implementation of a **frontend test assignment** for Wargaming.net.  
The goal is to reproduce the described functionality and design layout as accurately as possible.

---

## 🚀 Getting Started

### Locally

```bash
yarn
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to view the result.

### Remotely

You can also access the live version here:
[https://meister0.github.io/wargaming-test-fe/](https://meister0.github.io/wargaming-test-fe/)

---

## 📋 Overview

The assignment consists of **four main parts**:

---

### 1. 🔍 Search Block

**Important:** Implement the search block in as many ways as possible **without using JavaScript**.

Create a **search bar layout** where:

* The button and input field together occupy the full available width of the container.
* The **button width** depends on its text content.
* The **input field** takes up all the remaining free space.
* The block should correctly adapt to various container widths.

<img width="501" height="123" alt="image" src="https://github.com/user-attachments/assets/6658103d-77e9-4d52-a3a8-835787fed2e3" />

---

### 2. 🧱 Adaptive Tag List

Implement a **responsive list of tags**:
- For screens wider than **1300px**, several tags should be displayed in a row.  
- For screens around **800px**, the tag list should transform into a **dropdown**.  
- Active and inactive states should follow the provided design.

<img width="427" height="256" alt="image" src="https://github.com/user-attachments/assets/717a1d7b-08e9-4b6c-b2c7-50c7b5c2237e" />

---

### 3. 📰 Article Section

Recreate a static **article layout** based on the provided text:  
> “Почему не рассматриваются заявки с жалобами на нарушение Правил игры?”  
> (Why are reports about rule violations not reviewed?)

Ensure correct typography, spacing, and alignment according to the mockup ⬇️

<img width="793" height="407" alt="image" src="https://github.com/user-attachments/assets/6b10a986-19bf-4855-8231-41ce36587b9d" />

---

### 4. 🎛️ Element Selection Widget

Implement a **widget** for selecting up to **three elements** from a given list (provided initially as an array).
As test data, use 300 elements with sequential names — e.g. `["Element 1", "Element 2", "Element 3", ...]`.

#### 🧠 Logical Requirements

* The page should display a list of already selected elements (**up to 3 items**).
* Clicking **“Change my selection”** opens a dialog containing:

  * A list of all available elements (scrollable).
  * A **search bar** for filtering by substring.
  * An additional **dropdown filter** (`>10`, `>50`, `>100`).
* Search and filter work **together** and dynamically update the displayed list.
* Selected elements:

  * Are marked as checked in the dialog.
  * Are displayed as blocks at the bottom of the dialog.
* A maximum of 3 elements can be selected at a time. Once this limit is reached, all other checkboxes become **disabled**.
* Each selected element has a small **“X”** button to remove it from the list.
* Clicking **“Save”** closes the dialog and updates the selection on the main page.
* Clicking **“Cancel”** closes the dialog without applying any changes.

#### ⚙️ Technical Requirements

* Framework: preferably **Vue.js** or **React**, but any technology may be used if it gives a better result.
* The appearance and layout of the widget and dialog can be implemented freely — focus on **logic** and **usability**.
* The concept of the widget, both in logic and layout, is up to your discretion; the task focuses on functionality and interaction flow rather than pixel-perfect design.

Provided mockup ⬇️

<img width="350" height="auto" alt="image" src="https://github.com/user-attachments/assets/d574e0fd-58f8-423a-ac07-941d91635e28" />

---

© 2022 — Test Assignment for Wargaming.net
Created by [Meister0](https://github.com/meister0)
