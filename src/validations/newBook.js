const validateInput = (title, author, category) => {
  const errors = {};

  if (!title) {
    errors.title = 'This field is required';
  }

  if (!author) {
    errors.author = 'This field is required';
  }

  if (!category) {
    errors.category = 'This field is required';
  }

  return { errors, isValid: !Object.keys(errors).length };
};

export default validateInput;
