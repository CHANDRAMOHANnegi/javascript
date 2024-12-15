interface User {
  name: string;
  age: number;
  // Future-proofing for possible new features
  address?: string;
  phoneNumber?: string;
}

function createUser(name: string, age: number): User {
  // Simplified for current needs
  return { name, age };
}

export { createUser }