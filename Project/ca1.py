
# Import the math library for calculations
import math

# Define a function to calculate the future value of an investment
def future_value(principal, rate, time):
    return principal * math.pow(1 + rate, time)

# Define a function to calculate the interest rate for an investment
def interest_rate(principal, future_value, time):
    return math.pow(future_value / principal, 1 / time) - 1

# Define a function to calculate the payment required for a loan
def payment(principal, rate, time):
    return (rate * principal) / (1 - math.pow(1 + rate, -time))

# Define a function to calculate the number of periods for a loan
def periods(principal, rate, payment):
    return -math.log(1 - (rate * principal) / payment) / math.log(1 + rate)

# Define a function to calculate the present value of an investment
def present_value(future_value, rate, time):
    return future_value / math.pow(1 + rate, time)

# Define a function to calculate the interest rate for an annuity
def annuity_interest_rate(payment, present_value, time):
    return math.pow(payment / (present_value * ((1 - math.pow(1 + rate, -time)) / rate)), 1 / time) - 1

# Define a function to calculate the payment required for an annuity
def annuity_payment(rate, present_value, time):
    return present_value * ((rate * math.pow(1 + rate, time)) / (math.pow(1 + rate, time) - 1))

# Define a function to calculate the number of periods for an annuity
def annuity_periods(payment, present_value, rate):
    return -math.log(1 - (payment / (present_value * rate))) / math.log(1 + rate)

print("Future value of an investment of $1000 with a rate of 5% for 10 years:", future_value(1000, 0.05, 10))
print("Interest rate for an investment of $1000 with a future value of $2000 after 5 years:", interest_rate(1000, 2000, 5))
print("Payment required for a loan of $10000 with a rate of 6% for 5 years:", payment(10000, 0.06, 5))
print("Number of periods for a loan of $10000 with a rate of 6% and a payment of $2000:", periods(10000, 0.06, 2000))