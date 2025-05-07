# CourseConnect

CourseConnect is a full-stack e-learning platform built with React, TypeScript, GraphQL, and MongoDB. It allows users to explore, enroll in, and manage courses while enabling instructors to create and manage their own course content.

## 🚀 Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: Node.js + GraphQL + TypeScript
- **Database**: MongoDB
- **API Communication**: GraphQL

## 📦 Features

- Role-based access: Users & Instructors
- Course creation, listing, enrollment
- GraphQL APIs for flexible data fetching
- Scalable and type-safe backend with TypeScript
- Responsive and dynamic UI with React

## 📂 Project Structure


## 📌 GraphQL Overview

The backend uses GraphQL for efficient data communication. Clients request only the data they need using queries and mutations. The schema includes:
- `User`
- `Instructor`
- `Course`

Example query:
```graphql
query {
  courses {
    title
    instructor {
      name
    }
  }
}

git clone https://github.com/poteswapnil555/GraphQL_CourseConnect.git
cd courseconnect

cd server
npm install


cd client
npm install


npm run dev


npm start

