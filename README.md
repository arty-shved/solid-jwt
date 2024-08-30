# solid-jwt
Example mini-app for demonstrate SOLID principles

1. Принцип единственной ответственности (SRP)
Каждый класс отвечает за свою задачу. User управляет данными пользователя, UserService управляет пользователями, а TokenService отвечает за работу с токенами.

2. Принцип открытости/закрытости (Open/Closed Principle)
Мы можем добавлять новые методы в UserService или TokenService, не изменяя существующий код.

3. Принцип подстановки Лисков (Liskov Substitution Principle)
Если мы создадим подклассы для User или TokenService, они смогут использоваться вместо базовых классов без изменения поведения.

4. Принцип разделения интерфейса (Interface Segregation Principle)
Мы можем создать интерфейсы для UserService и TokenService, чтобы разделить их функциональность, если это потребуется.

5. Принцип инверсии зависимостей (Dependency Inversion Principle)
AuthController зависит от абстракций: UserService, User, TokenService, а не от конкретной реализации
