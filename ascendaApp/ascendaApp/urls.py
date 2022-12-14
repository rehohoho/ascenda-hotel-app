"""ascendaApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from ascendaApp import views

urlpatterns = [
    path('booking/', views.booking, name='booking-view'),
    path('admin/', admin.site.urls),
    path("", views.front, name="front"),
    path('api/listHotelsInternal/', views.list_hotels_internal),
    path('api/getHotelInternal/<int:pk>', views.detail_hotel_internal),
    path('api/bookings', views.bookings),
    path('api/destinations', views.destinations),
    path('api/hotels', views.hotels),
    path('api/hotelDetail', views.hotel_detail),
    path('api/hotelPrice', views.hotel_price),
    path('api/rooms', views.rooms)
]

urlpatterns = format_suffix_patterns(urlpatterns)
