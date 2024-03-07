from flask import Blueprint, render_template, request, redirect, url_for

main_bp = Blueprint('main', __name__)


@main_bp.route('/')
def index():
    return render_template('index.html')


@main_bp.route('/readmore')
def readmore():
    return render_template('components/readMore.html')


@main_bp.route('/brid1')
def brid1():
    return render_template('components/pets/Brid1.html')


@main_bp.route('/brid2')
def brid2():
    return render_template('components/pets/Brid2.html')


@main_bp.route('/Dog1')
def Dog1():
    return render_template('components/pets/Dog1.html')


@main_bp.route('/Dog2')
def Dog2():
    return render_template('components/pets/Dog2.html')


@main_bp.route('/Cat2')
def Cat1():
    return render_template('components/pets/Cat1.html')


@main_bp.route('/Cat2')
def Cat2():
    return render_template('components/pets/Cat2.html')


@main_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return redirect(url_for('index'))
    return render_template('components/Login.html')


@main_bp.route('/product1')
def product1():
    return render_template('components/products/product1.html')


@main_bp.route('/product2')
def product2():
    return render_template('components/products/product2.html')


@main_bp.route('/categories')
def categories():
    return render_template('components/categories.html')


@main_bp.route('/ResourceCenter')
def ResourceCenter():
    return render_template('components/services/ResourceCenter.html')


@main_bp.route('/find')
def find():
    return render_template('components/find.html')
