---
title: "Flask CORS Error: The 3-Hour Debugging Nightmare"
date: "2024-01-08"
readTime: "4 min read"
category: "error"
tags: ["Flask", "CORS", "Debugging", "Python"]
---

**Error**: `Access to fetch at 'http://localhost:5000/api/data' from origin 'http://localhost:3000' has been blocked by CORS policy`

**Time wasted**: 3 hours and 47 minutes

**Coffee consumed**: 4 cups

**Sanity remaining**: 12%

I was building a simple React frontend that needed to fetch data from my Flask backend. Should be straightforward, right? Wrong.

## The Setup

### My Initial Code

**Frontend (React)**:
\`\`\`javascript
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/data');
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error('Error:', error);
  }
};
\`\`\`

**Backend (Flask)**:
```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    return jsonify({'message': 'Hello from Flask!'})

if __name__ == '__main__':
    app.run(debug=True)
