/* Replace with your SQL commands */

INSERT INTO Users (login,password,role,is_active,created_at)
VALUES
    ('Admin',MD5('Trial'),1,true,NOW()),
    ('Test',MD5('test'),2,true,NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO Categories (title,description)
VALUES
    ('Продукты Питания', 'В этой категории Вы можете купить продукты питания.'),
    ('Фотоаппараты', 'В этой категории Вы можете купить фотоаппараты.'),
    ('Мобильные телефоны', 'В этой категории Вы можете купить мобильные телефоны.'),
    ('Ноутбуки', 'В этой категории Вы можете купить ноутбуки.')
ON CONFLICT (id) DO NOTHING;

INSERT INTO Product_params (name,description)
VALUES
    ('Вес', 'Укажите вес Вашего товара.'),
    ('Ширина', 'Укажите ширину Вашего товара.'),
    ('Длинна', 'Укажите длинну Вашего товара.')
ON CONFLICT (id) DO NOTHING;