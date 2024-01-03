import yfinance as yf

def calculate_credit(spread_width, fees):
    # call credit spread calculation

    # puts credit spread calculation
    return spread_width * 100 + fees

def get_realtime_data(symbol, date):
    try:
        stock_data = yf.Ticker(symbol)
        current_price = stock_data.history(period='1d')['Close'].iloc[-1]
        options = stock_data.option_chain(date)
        # Access call options
        calls = options.calls
        # Access put options
        puts = options.puts

        # filtered put options to 10
        
        target_strike_price = current_price
        # filtered call options to 10
        calls_filtered = calls[(calls.strike >= target_strike_price - 4) & (calls.strike <= target_strike_price + 4)]
        puts_filtered = puts[(puts.strike >= target_strike_price - 4) & (puts.strike <= target_strike_price + 4)]
        print(puts_filtered)
        print(calls_filtered)
        callSpreads = []
        putSpreads = []
        for x in range(7):
            firstElement = round(calls_filtered.iloc[x].lastPrice, 2)
            secondElement = round(calls_filtered.iloc[x+1].lastPrice, 2)
            callSpreads.append(round((firstElement - secondElement) * 100))

            putsFirstElement = round(puts_filtered.iloc[x+1].lastPrice, 2)
            putsSecondElement = round(puts_filtered.iloc[x].lastPrice, 2)
            putSpreads.append(round((putsFirstElement - putsSecondElement) * 100))
        final = []
        for x in range(7):
            final.append(callSpreads[x]+putSpreads[x])
        print(callSpreads)
        print(putSpreads)
        print(final)
        

        return current_price
    
    except Exception as e:
        print(f"Error fetching and filtering data for {symbol}: {e}")
        return None

def main():
    symbol = 'SPY'
    spread_width = 1  # Assuming $1 wide spread
    fees_per_side = 2  # $2 fees each side

    current_price = get_realtime_data(symbol, '2024-01-12')
    if current_price is not None:
        total_credit = calculate_credit(spread_width, fees_per_side)
        print(f"Current price of {symbol}: ${current_price:.2f}")
        print(f"Total credit for the spread: ${total_credit:.2f}")

if __name__ == "__main__":
    main()