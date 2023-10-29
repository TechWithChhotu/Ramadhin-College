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
