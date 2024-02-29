### В этом проекте реализованны 2 простых игр запускаемых через терминал:

1. **gcm-game**. Программа дает три случайных числа от 0 до 100. Необходимо написать их наименьшее общее кратное.
2. **geoProg-game**. Программа дает геометрическую прогрессию со случайным началом, шагом и длинной. Необходимо назвать пропущенный элемент.

### Подготовка:

- Проверьте что у вас есть утилита ***make***. Для проверки пропишите в терминале ```make -v```, если ее нет, установите.
    - **Linux**. Для установки пропишите в терминале ```sudo apt-get install make```
    - **MacOS**. Установка будет производиться через ***homebrew***, если у вас его нет, для установки пропишите в
      терминале\
      ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```\
      Теперь пропишите ```brew install make```
    - **Windows**. Предлагаю воспользоваться менеджером пакетов ***Chocolatey***, для его установки запустите терминал
      от имени администратора и пропишите следующую команду:\
      ```Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-ObjectSystem.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))```\
      Закройте и откройте терминал. Затем пропишите: ```choco install make```


- Проверьте что ваша версия ***nodejs*** не ниже **20.5.1**. Для проверки своей версии пропишите в терминале
  ```node -v```, если она не соответствует требованию, обновите.
    - Для обновления ***nodejs*** пропишите в терминале:\
      ```sudo apt update```\
      ```sudo apt upgrade```\
      ```sudo apt install -y curl```\
      Это обновит вашу систему и установит ***curl***. Далее пропишите
      ```curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -```\
      И наконец пропишите ```sudo apt install -y nodejs```, теперь можно прописать ```node -v```, что бы убедиться что
      версия ***nodejs*** обновилась.

- Подключите зависимости с помощью команды ```make install```
- Выдайте всем файлам в директории ***bin*** права на запуск. Для этого, в корне проекта, для каждой игры, пропишите
  ```chmod +x chmod +x bin/gcm-game.js``` и ```chmod +x chmod +x bin/geomProg-game.js```

### Запуск:

Если все шаги по подготовке выполнены, достаточно будет написать в терминале ```gcm-game``` или```geomProg-game```

***

### Аскинемы с демонстрацией работы каждой игры:

#### 1. [Gcm asciinema](https://asciinema.org/a/9sy6cpCWIElRPg0JiXwhAciS3)

#### 2. [GeomProg asciinema](https://asciinema.org/a/AuERBe5oEqpMFm2uLDbcAARWe)
