# Generated by Django 4.0.6 on 2022-07-21 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ascendaApp', '0002_alter_hotel_options_hotel_datecreated_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookingInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, default='', max_length=256)),
                ('firstName', models.CharField(blank=True, default='', max_length=256)),
                ('lastName', models.CharField(blank=True, default='', max_length=256)),
                ('countryCode', models.CharField(blank=True, default='', max_length=256)),
                ('phoneNumber', models.CharField(blank=True, default='', max_length=256)),
                ('emailAddress', models.CharField(blank=True, default='', max_length=256)),
                ('specialRequest', models.CharField(blank=True, default='', max_length=256)),
                ('cardNumber', models.CharField(blank=True, default='', max_length=256)),
                ('nameOnCard', models.CharField(blank=True, default='', max_length=256)),
                ('expiryDate', models.DateTimeField(auto_now_add=True)),
                ('cvvCvc', models.CharField(blank=True, default='', max_length=256)),
                ('address', models.CharField(blank=True, default='', max_length=256)),
                ('city', models.CharField(blank=True, default='', max_length=256)),
                ('zipCode', models.CharField(blank=True, default='', max_length=256)),
                ('country', models.CharField(blank=True, default='', max_length=256)),
            ],
        ),
    ]
