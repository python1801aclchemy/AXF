from App.ext import db


class HomeBanner(db.Model):
    __tablename__ = 'axf_wheel'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    img = db.Column(db.String(256))
    name = db.Column(db.String(64))
    trackid = db.Column(db.String(16))

class HomeNav(db.Model):
    __tablename__ = 'axf_nav'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    img = db.Column(db.String(256))
    name = db.Column(db.String(64))
    trackid = db.Column(db.String(16))

class MustBuy(db.Model):
    __tablename__ = 'axf_mustbuy'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    img = db.Column(db.String(256))
    name = db.Column(db.String(64))
    trackid = db.Column(db.String(16))


class AxfShop(db.Model):
    __tablename__ = 'axf_shop'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    img = db.Column(db.String(256))
    name = db.Column(db.String(64))
    trackid = db.Column(db.String(16))


class MainShow(db.Model):
    __tablename__ = 'axf_mainshow'
    trackid = db.Column(db.String(16))
    img = db.Column(db.String(256))
    name = db.Column(db.String(64))
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    categoryid = db.Column(db.String(16))
    brandname = db.Column(db.String(100))
    img1 = db.Column(db.String(200))
    childcid1 = db.Column(db.String(16))
    productid1 = db.Column(db.String(16))
    longname1 = db.Column(db.String(200))
    price1 = db.Column(db.String(8))
    marketprice1 = db.Column(db.Integer, default=1)
    img2 = db.Column(db.String(200))
    childcid2 = db.Column(db.String(16))
    productid2 = db.Column(db.String(16))
    longname2 = db.Column(db.String(200))
    price2 = db.Column(db.String(8))
    marketprice2 = db.Column(db.Integer, default=1)
    img3 = db.Column(db.String(200))
    childcid3 = db.Column(db.String(16))
    productid3 = db.Column(db.String(16))
    longname3 = db.Column(db.String(200))
    price3 = db.Column(db.String(8))
    marketprice3 = db.Column(db.Integer, default=1)
