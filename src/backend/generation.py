import random
import math

def generate_math_question(question_template):
    # Generate random values for variables
    a = random.randint(1, 10)
    b = math.log10(a)  # Evaluate b as the logarithm base 10 of a

    # Substitute variables in the question template
    question = question_template.format(a=a, b=b)

    return question

# Example usage
question_template = "If John has {a} apples and Bob has {b} apples, what is the difference in their number of apples?"
question = generate_math_question(question_template)
print(question)