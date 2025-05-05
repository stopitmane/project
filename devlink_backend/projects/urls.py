from rest_framework.routers import DefaultRouter
from .views import IssueViewSet, IssueCommentViewSet

router = DefaultRouter()
router.register(r'issues', IssueViewSet, basename='issue')
router.register(r'comments', IssueCommentViewSet, basename='comment')

urlpatterns = router.urls
