from flask_restful import Resource, fields, marshal_with

from App.models import HomeBanner, HomeNav, MustBuy, AxfShop, MainShow


class Hello(Resource):

    def get(self):
        return {"msg": "ok"}

Banners_fields = {
    'img': fields.String,
    'trackid': fields.String,
    'name': fields.String,
}
# returnBanners = {
#     'banner_data': fields.List(fields.Nested(Banners_fields))
# }
nav_fields = {
    'img': fields.String,
    'name': fields.String,
}

# returnNavs = {
#     'nav_data':fields.List(fields.Nested(nav_fields))
# }

mustbuy_fields = {
    'img': fields.String,
    'name': fields.String,
}

axfshop_fields = {
    'img': fields.String,
    'trackid': fields.String,
    'name': fields.String,
}

mainshow_fields = {

    'img': fields.String,
    'trackid': fields.String,
    'name': fields.String,
    'img1': fields.String,
    'longname1': fields.String,
    'price1': fields.String,
    'marketprice1': fields.String,
    'img2': fields.String,
    'longname2': fields.String,
    'price2': fields.String,
    'marketprice2': fields.String,
    'img3': fields.String,
    'longname3': fields.String,
    'price3': fields.String,
    'marketprice3': fields.String,
}
returnHomeData = {
    'msg':fields.String(default='ok'),
    'status':fields.String(default='200'),
    'banner_data':fields.List(fields.Nested(Banners_fields)),
    'nav_data':fields.List(fields.Nested(nav_fields)),
    'mustbuy_data':fields.List(fields.Nested(mustbuy_fields)),
    'axfshop_data':fields.List(fields.Nested(axfshop_fields)),
    'mainshow_data':fields.List(fields.Nested(mainshow_fields)),
}

class Home(Resource):
    @marshal_with(returnHomeData)
    # @marshal_with(returnNavs)
    # @marshal_with(returnBanners)

    def get(self):
        homeBanners = HomeBanner.query.all()
        homeNavs = HomeNav.query.all()
        homeMustBuys =MustBuy.query.all()
        axfshops = AxfShop.query.all()
        mainshows = MainShow.query.all()
        print(mainshows)


        return {'msg':'ok',  'nav_data':homeNavs,'banner_data':homeBanners,
                'mustbuy_data':homeMustBuys, 'axfshop_data':axfshops, 'mainshow_data': mainshows}