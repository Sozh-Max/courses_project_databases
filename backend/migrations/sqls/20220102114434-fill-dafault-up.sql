/* Replace with your SQL commands */

INSERT INTO "public"."Users" (login,password,email,role,is_active,created_at)
VALUES
    ('test','Trial','test@test.by',1,true,NOW()),
    ('test1','Trial1','test1@test.by',2,true,NOW()),
    ('test3','Trial3','test2@test.by',3,true,NOW()),
    ('test4','Trial4','test3@test.by',2,true,NOW()),
    ('test5','Trial5','test4@test.by',3,true,NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO "public"."Categories" (title,description)
VALUES
    ('Продукты Питания', 'В этой категории Вы можете купить продукты питания.'),
    ('Цифровая продукция', 'В этой категории Вы можете купить цифровую продукцию.')
ON CONFLICT (id) DO NOTHING;

INSERT INTO "public"."Product_params" (name,description)
VALUES
    ('Вес', 'Укажите вес Вашего товара.'),
    ('Ширина', 'Укажите ширину Вашего товара.'),
    ('Длинна', 'Укажите длинну Вашего товара.'),
    ('Описание', 'Укажите описание Вашего товара.')
ON CONFLICT (id) DO NOTHING;