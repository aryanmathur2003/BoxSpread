from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import OptionChain
from django.db import IntegrityError
from django.http import JsonResponse
from django.conf import settings
import yfinance as yf

# Create your views here.
class runScript(APIView):
    def get(self, request, exp_date):
        try:
            stock_data = yf.Ticker('SPY')
            current_price = stock_data.history(period='1d')['Close'].iloc[-1]
            options = stock_data.option_chain(exp_date)
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
            priceTable = []

            for x in range(7):
                priceTable.append(calls_filtered.iloc[x].strike)
                firstElement = round(calls_filtered.iloc[x].lastPrice, 2)
                secondElement = round(calls_filtered.iloc[x+1].lastPrice, 2)
                callSpreads.append(round((firstElement - secondElement) * 100))

                putsFirstElement = round(puts_filtered.iloc[x+1].lastPrice, 2)
                putsSecondElement = round(puts_filtered.iloc[x].lastPrice, 2)
                putSpreads.append(round((putsFirstElement - putsSecondElement) * 100))

            final = []
            for x in range(7):
                final.append(callSpreads[x]+putSpreads[x])
            

            ans = {
                'calls': callSpreads,
                'puts': putSpreads,
                'final': final,
                'strikes': priceTable

            }
            print(callSpreads)
            print(putSpreads)
            print(final)
            return JsonResponse(ans, content_type='application/json', status=status.HTTP_200_OK)
        
        except Exception as e:
            print(f"Error fetching and filtering data")
            return Response(status=status.HTTP_400_BAD_REQUEST)