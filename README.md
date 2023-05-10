# FastAPI Backend

This project is a FastAPI backend application that serves as an API for a React frontend.

## Prerequisites

- Python 3.10.6
- pyenv
- pyenv-virtualenv

## Installation

### 1. Install pyenv and pyenv-virtualenv

### 2. Install Python 3.10.6 and create a virtual environment

```bash
pyenv install 3.10.6
pyenv virtualenv 3.10.6 fastapi-env
```

### 3. Activate the virtual environment

```bash
pyenv activate fastapi-env
```

### 4. Install FastAPI and Uvicorn

```bash
pip install fastapi uvicorn
```

### 5. Running the Application

1. Navigate to the project directory
1. Run the FastAPI server:

```bash
uvicorn main:app --reload
```

The FastAPI backend will be running on <http://localhost:8000>.

### 6. Deactivating the Virtual Environment

When you're done working on the project, deactivate the virtual environment by running:

```bash
pyenv deactivate
```
