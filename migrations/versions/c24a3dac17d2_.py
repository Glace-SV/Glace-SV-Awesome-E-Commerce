"""empty message

Revision ID: c24a3dac17d2
Revises: 6a23a4840ea2
Create Date: 2021-07-30 19:49:00.807182

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c24a3dac17d2'
down_revision = '6a23a4840ea2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('lastname', sa.String(length=80), nullable=False))
    op.drop_column('user', 'last_name')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('last_name', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
    op.drop_column('user', 'lastname')
    # ### end Alembic commands ###
