from datetime import datetime, timedelta
start_date = datetime(2022, 1, 22)
print(start_date.strftime("%d %B %Y"))
for i in range(23):
    start_date += timedelta(days=60)  # Add 60 days (approx. 2 months)
    # Adjust the day of the month to 22
    start_date = start_date.replace(day=22)
    print(start_date.strftime("%d %B %Y"))
