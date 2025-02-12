from django.urls import path
from . import views
from api.views import PointsView, IncreasePointsView, DecreasePointsView

urlpatterns = [
    path('user/Points/', PointsView.as_view(), name='user-points'),
    path('user/Points/increase/', IncreasePointsView.as_view(), name='increase-points'),
    path('user/Points/decrease/', DecreasePointsView.as_view(), name='decrease-points'),
 
]
