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
