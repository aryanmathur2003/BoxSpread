import yfinance as yf

def calculate_credit(spread_width, fees):
    # call credit spread calculation

    # puts credit spread calculation
    return spread_width * 100 + fees

def get_realtime_data(symbol):
    try:
        stock_data = yf.Ticker(symbol)
        current_price = stock_data.history(period='1d')['Close'].iloc[-1]
        options = stock_data.option_chain('2024-01-02')
        #print(type(options))
        # Access call options
        calls = options.calls
        print("Call Options:")
        # print(calls)
        target_strike_price = current_price
        calls_filtered = calls[(calls.strike >= target_strike_price - 5) & (calls.strike <= target_strike_price + 5)]
        print(calls_filtered)
        # Access put options
        puts = options.puts
        print("Put Options:")
        puts_filtered = puts[(puts.strike >= target_strike_price - 5) & (puts.strike <= target_strike_price + 5)]
        print(puts_filtered)
        
        return current_price
    except Exception as e:
        print(f"Error fetching data for {symbol}: {e}")
        return None

def main():
    symbol = 'SPY'
    spread_width = 1  # Assuming $1 wide spread
    fees_per_side = 2  # $2 fees each side

    current_price = get_realtime_data(symbol)
    if current_price is not None:
        for x in range(10):
            print(x)
            total_credit = calculate_credit(spread_width, fees_per_side)
            print(f"Current price of {symbol}: ${current_price:.2f}")
            print(f"Total credit for the spread: ${total_credit:.2f}")

if __name__ == "__main__":
    main()