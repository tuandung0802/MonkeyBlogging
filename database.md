# Post

id
title
image
slug - đường dẫn
createdAt
status: 1(approved) 2(pending) 3(reject)
content:
userId ( dung de truy van ra thong tin user)
categoryId ( Lay thong tin cua danh muc )

# category ( lay toan bo bai viet r filter theo category Id = id)

-id

- title
- slug
- status: 1(approved) 2(pending)
  createdAt

# user

id
displayName
email
password
avatar
status: 1(Active) 2(pending) 3(BAN)
role: 1(Admin) 2(Mod) 3(User)
permissions: "Add_post"
createdAt
