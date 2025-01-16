## **Expense Tracker**

**Table of Contents**
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)

---

**Introduction**
The **Expense Tracker** is a simple React-based web application that helps users manage their daily expenses. Users can add, sort, filter, and export expenses in a text format. This application is designed to be lightweight, user-friendly, and responsive.

---

**Features**
- Add expenses with details like amount, type (debit/credit), and description.
- View, sort, and filter expenses.
- Export expense data to a text file.
- Responsive design using Tailwind CSS.

---

**Technologies Used**
- **React**: Frontend framework for building the user interface.
- **TypeScript**: For type-safe coding (optional, based on your setup).
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Radix UI**: For interactive UI components like dropdowns and radio buttons.
- **HTML5/JavaScript (ES6+):** Core web technologies.

---

### **Installation**
Follow these steps to run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. **Install Dependencies**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```
   This will start the server and open the app in your browser at `http://localhost:3000`.

---

**Usage**
1. Open the application in your browser.
2. Add an expense by entering the amount, selecting a type (debit/credit), and providing a description.
3. Use sorting and filtering options to view specific transactions.
4. Export expenses to a `.txt` file by clicking the "Export to PDF" button.

---

**Folder Structure**
```
expense-tracker/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # UI-specific components (Button, Input, etc.)
│   ├── App.tsx             # Main app component
│   ├── index.tsx           # Entry point for the app
│   ├── styles/             # Tailwind CSS and other styling files
│   └── assets/             # Static assets (images, icons, etc.)
├── public/                 # Public files (HTML, favicon, etc.)
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── tailwind.config.js      # Tailwind CSS configuration
```

---

**Contributing**
Contributions are welcome!  
If you'd like to contribute, please fork the repository and submit a pull request.

---

**License**
This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.
