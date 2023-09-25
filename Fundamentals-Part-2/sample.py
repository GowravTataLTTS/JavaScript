bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

tips = []
total_bill = []

for i in bills:
    if 50 < i < 300:
        tip = i * 0.15
        tips.append(tip)
        total_bill.append(tip +i)
    else:
        tip = i * 0.2
        tips.append(tip)
        total_bill.append(tip +i)
print(bills)
print(tips)
print(total_bill)
print(sum(total_bill)/10)