# 🚀 Welcome to Your New Web App!

This project is a **"Skeleton"**—a solid, pre-built foundation that you can use to build a high-quality website quickly. It already has the design and structure ready, so you just need to follow these steps to get it running on your computer.

---

## 🛠 Prerequisites for Mac Users (Do this first!)

To get this app running, you need a few tools. We will use **Homebrew** (the most popular tool for Mac developers) to install everything automatically.

### 1. Open your Terminal
Press `Cmd + Space` on your keyboard, type **Terminal**, and press Enter.

### 2. Install Homebrew
Copy and paste this command into your terminal and press Enter:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
*   **Note:** If it asks for your Mac password, type it and press Enter. You won't see the letters as you type—this is normal!

### 3. Install Node.js and Git
Once Homebrew is finished, copy and paste these two commands one by one:

**For Node.js (Runs the app):**
```bash
brew install node
```

**For Git (Downloads the code):**
```bash
brew install git
```

### 4. Verify Installation
Type these to make sure everything is installed correctly:
- `node -v` (Should show a version number)
- `git --version` (Should show a version number)

---

## 🏃‍♂️ Step 1: Getting the Code onto Your Computer

We use a process called "Cloning" to download a copy of this project.

1.  **In your Terminal**, paste this command and press Enter:
    ```bash
    git clone https://github.com/The-Agentive-Labs/web-app.git
    ```
2.  **Go into the folder** by typing:
    ```bash
    cd web-app
    ```

---

## 📦 Step 2: Preparing the App

Once you have the code, you need to "install" the building blocks that make the website work.

1.  **Type this command** in your terminal:
    ```bash
    npm install
    ```
    *   *What's happening?* This downloads all the necessary components (like React and styling tools) that the website needs to run. It might take a minute!

---

## ✨ Step 3: View the Website Locally

Now, let's see what the website looks like!

1.  **Type this command**:
    ```bash
    npm run dev
    ```
2.  **Open your browser** (like Chrome or Safari).
3.  Look for a link in your terminal that looks like `http://localhost:5173`. **Click that link** or type it into your browser.
4.  **Success!** You should see the website running locally on your computer.

---

## 🌿 How to Safely Save Your Changes (Creating a Branch)

To keep the main website "clean" and working perfectly, we use **Branches**. Think of a branch like a "draft" or a "copy" where you can experiment without breaking the original.

### 1. Create your own draft (Branch)
Before you change anything, tell the computer you want a new branch:
```bash
git checkout -b your-name-updates
```
*   *Example:* `git checkout -b rishie-new-design`

### 2. Save your work
After you make changes to the files, go back to your terminal and run these two commands:
```bash
git add .
git commit -m "Explain what you changed here"
```
*   *Example:* `git commit -m "Updated the home page text"`

### 3. Share your work (Push)
To send your changes back to the main repository so others can see them:
```bash
git push origin your-name-updates
```
*   *Example:* `git push origin rishie-new-design`

---

## 💡 Pro Tips
- **To stop the website**: Go to your terminal and press `Ctrl + C`.
- **To start it again later**: Just open the terminal in this folder and type `npm run dev`.
- **Don't see your changes?**: Make sure you "Save" the files in your code editor first!

---

Built with ❤️ by [The Agentive Labs](https://github.com/The-Agentive-Labs).
