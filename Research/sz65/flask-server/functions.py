import math
# Simple Intert
def simple_interest(p, r, t):
    print('Amount: ', p)
    print("Rate of Interest (Per Annum)", r)
    print("Time (In Years): ",t)
    si=(p*r*t)/100
    a= p+si
    print("Final Amount: ", a)
    print("Simple Interest: ", si)

# compound interest
def compound_interest(p,r,t):
    print('Amount: ', p)
    print("Rate of Interest (Per Annum)", r)
    print("Time (In Years): ",t)
    a= p*((1+r/100)**t)
    ci= a-p
    print("Final Amount: ", a)
    print("Compound Interest: ", ci)

# compound annual growth rate
def CAGR(p,a, t ):
    print("Initial value of money: ",p)
    print('Final value of money: ',a)
    print("Time in years: ", t)
    t_inv=1/t
    cagr_rate= (((a/p)**t_inv)  -1)*100
    print("Compound Annual Growth Rate (CAGR): ", cagr_rate)

# doubling time calculation
def double(r):
    print("Rate of Interest: ",r)
    t= math.log(2)/math.log(1+ (r/100))
    print("Time taken in years to double money at",r,"percent PA: ", t)

# Purchasing power
def pur_power(p,r,t):
    print("Initial Amount: ",p)
    print("Annual Inflation Rate: ",r)
    print("Time in years:", t)
    a= p* ((100/(100+r))**t)
    print("Final amount after",t,"years of inflation: ", a)
