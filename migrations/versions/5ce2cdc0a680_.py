"""empty message

Revision ID: 5ce2cdc0a680
Revises: a0131047ddad
Create Date: 2018-04-25 16:56:56.116922

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5ce2cdc0a680'
down_revision = 'a0131047ddad'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('axf_mainshow', sa.Column('img', sa.String(length=256), nullable=True))
    op.add_column('axf_mainshow', sa.Column('name', sa.String(length=64), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('axf_mainshow', 'name')
    op.drop_column('axf_mainshow', 'img')
    # ### end Alembic commands ###
