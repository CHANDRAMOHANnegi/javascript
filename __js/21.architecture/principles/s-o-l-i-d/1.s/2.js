/**
 * 1. SRP
 * **/

/*****
 * before (violates SRP)
 * *****/

class UserManager {
  constructor(authService, db) {
    this.authService = authService;
    this.db = db;
  }

  authenticate(username, password) {
    // Authentication logic using authService
  }

  validateUserData(data) {
    // Data validation logic
  }

  createUserProfile(data) {
    // Profile creation logic using db
  }

  getUserProfile(userId) {
    // Profile retrieval logic using db
  }

}

/*****
 * After SRP
 * *****/

class AuthenticationService {
  authenticate(username, password) {
    // Authentication logic
  }
}

class UserDataValidator {
  validate(data) {
    // Data validation logic
  }
}

class UserDatabase {
  createUserProfile(data) {
    // Profile creation logic
  }

  getUserProfile(userId) {
    // Profile retrieval logic
  }
}
