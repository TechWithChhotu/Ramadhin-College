# Ramadhin College, Sheikhpura

# `BACKEND`

## Implement user registration functionality

This commit introduces the user registration functionality.
Some Important part of this commit: -

- Added input validation for required fields (name, email, and password).
- Improved error handling with specific HTTP status codes (422 for validation errors, 500 for server errors).
- Created a new user and generated a JWT for authentication.
- Set a secure HTTP cookie with the JWT.
- Removed the user's password from the JSON response.
- Send user friendly json with message in response

## Implement user sign-in functionality

This commit introduces the user sign-in functionality in the codebase. Some Important part of this commit: -

- Added input validation for required fields (email and password) in the sign-in controller.
- Improved error handling with specific HTTP status codes and build AppError, custom error messages utility using Error class.
- Validated user credentials by checking if the user exists and comparing the provided password.
- Created and set a secure HTTP cookie with a JWT for authenticated users.
- Removed the user's password from the JSON response.
- Send user friendly json with message in response

## Implement file upload middleware

This commit introduces a middleware for file uploads with multer.

- Specifies file upload settings, such as destination, size limits, and supported file types.
- Provides error handling for unsupported file types.
- Allows uploading files to the server.

This feature enables file uploads for avatars and other user-related content.

## Implement user admission functionality

This commit introduces the user admission functionality in the codebase.Some Important part of this commit: -

- Added data validation for required fields.
- Checked if the user already exists, then further process for admission.
- Created a new admission record with avatar image.
- Uploaded avatar image, process through multer, finally upload on cloudinary.
- Send user friendly json with message in response

## Implement authentication middleware

This commit introduces authentication middleware for user sessions.

- Checks for the presence of a valid token in cookies.
- Verifies the token's authenticity and assigns user data to the request object.
- Ensures user authentication before granting access to protected routes.

This feature enhances the security of the application by enforcing user authentication.

## Implement user profile retrieval functionality

This commit introduces the user profile retrieval functionality in the codebase.

- Retrieves the user's profile based on their ID.
- Provides a response with the user's profile data.

This feature allows users to access their profile information.

# Implement admin dashboard functionality

This commit introduces the admin dashboard functionality in the codebase. Some Important part of this commit: -

- Fetches admin data based on the user's ID.
- Validates the presence of an admin user.
- Retrieves admission records based on the specified course.
- Provides a response with admission data.

This feature enables administrators to view admission records for a specific course.

# Implement admission confirmation update functionality

This commit introduces the functionality to update the confirmation status of admission applications.

- Fetches admin data based on the user's ID.
- Updates the admission confirmation status based on the provided query parameter.
- Provides a response indicating whether the application was accepted or rejected.

This feature allows administrators to manage admission applications.

# chore: Transition from backend to frontend development

```
In this commit, we are shifting our focus from backend development to frontend development in line with project requirements. We will now primarily work on the user interface, user experience, and other frontend-related tasks.

During this transition, we will coordinate closely with the backend development team to ensure that our frontend work aligns with the necessary API endpoints and data requirements.

This change in focus will help us deliver a fully integrated and functional application that meets both frontend and backend requirements.
```

# `Frontend Started`

## basic vite app & teilwind css setup
