

# Function Instructions
def add(x, y):
    """add"""

    return x + y


def subtract(x, y):
    """minus"""

    return x - y


def multiply(x, y):
    """multiply"""

    return x * y


def divide(x, y):
    """Divide"""

    return x / y


# Input
print("Choose one function：")
print("1、Plus")
print("2、Subtract")
print("3、Multipy")
print("4、Over")

choice = input("Choose one from (1/2/3/4):")

num1 = int(input("The first number: "))
num2 = int(input("The second number: "))

if choice == '1':
    print(num1, "+", num2, "=", add(num1, num2))

elif choice == '2':
    print(num1, "-", num2, "=", subtract(num1, num2))

elif choice == '3':
    print(num1, "*", num2, "=", multiply(num1, num2))

elif choice == '4':
    print(num1, "/", num2, "=", divide(num1, num2))
else:
    print("Illegal")