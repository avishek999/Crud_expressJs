
# Express.js CRUD API with MongoDB

This project showcases a simple CRUD (Create, Read, Update, Delete) API using Express.js and MongoDB. The API allows you to manage products with fields for `name`, `quantity`, and `price`.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- A MongoDB account (with a connection string)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/avishek999/Crud_expressJs.git
   cd Crud_expressJs
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up MongoDB:**

   - Get your MongoDB connection string from your MongoDB account.
   - Create a `.env` file in the root directory and add your MongoDB URI:

     ```env
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Run the server:**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000`.

### API Endpoints

1. **Create a Product**

   - **Endpoint:** `POST /api/products`
   - **Description:** Adds a new product to the database.
   - **Request Body:**
     ```json
     {
       "name": "Product Name",
       "quantity": 10,
       "price": 100
     }
     ```

2. **Read All Products**

   - **Endpoint:** `GET /api/products`
   - **Description:** Fetches all products from the database.

3. **Read a Single Product**

   - **Endpoint:** `GET /api/products/:id`
   - **Description:** Fetches a product by its ID.

4. **Update a Product**

   - **Endpoint:** `PUT /api/products/:id`
   - **Description:** Updates the details of a product by its ID.
   - **Request Body:**
     ```json
     {
       "name": "Updated Product Name",
       "quantity": 15,
       "price": 120
     }
     ```

5. **Delete a Product**

   - **Endpoint:** `DELETE /api/products/:id`
   - **Description:** Deletes a product by its ID.

### Testing with React or Next.js

To practice CRUD operations, you can build a simple front-end using React or Next.js. Below is a brief guide to help you set up the front-end for testing:

1. **Create a new React or Next.js project:**

   ```bash
   npx create-react-app my-crud-app
   ```

   or for Next.js:

   ```bash
   npx create-next-app my-crud-app
   ```

2. **Install Axios for making HTTP requests:**

   ```bash
   npm install axios
   ```

3. **Create components for each CRUD operation:**
   - `CreateProduct.js` for creating a new product
   - `ProductList.js` for reading all products
   - `ProductDetail.js` for reading and updating a single product
   - `DeleteProduct.js` for deleting a product

4. **Connect your React or Next.js components to the Express.js API endpoints:**
   - Use Axios to send HTTP requests to the API.
   - Handle responses and update the UI accordingly.

### Conclusion

This setup provides a foundational understanding of how to create a full-stack application with Express.js, MongoDB, and a front-end framework like React or Next.js. You can extend this project by adding more features or integrating it with other services.

For more details, visit the [repository](https://github.com/avishek999/Crud_expressJs).

-