# This source file is meant for the fizzBuzz


def fizz_buzz(number):
    ctr=1
    while ctr <= number:
        if ctr%3==0:
            print("Fizz", end="")
            if ctr%5==0:
                print("Buzz", end="")
        elif ctr%5==0:
            print("Buzz", end="")
        else:
            print(ctr, end="")
        print()
        ctr+=1
        
def ask_for_input():
    try:
        number = int(input("Enter your number:"))
        print(number)
        if number < 0 and number > 100:
            print("Please enter a number more within 1-100")
            ask_for_input()
        fizz_buzz(number)
    except ValueError as err:
        print('Please enter a valid input number')
        ask_for_input()
    
        
if __name__ == "__main__":
    ask_for_input()
    
        