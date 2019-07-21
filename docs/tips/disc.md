# Диск

Заметки по работе с диском или дисковыми массивами.

## Разметка и подключение диска

Чтобы создать на новом диске раздел, необходимо войти в программу `parted`:

```
root@linux# parted -a optimal /dev/sdb
```

Выполнить следующие команды:

```
(parted) mklabel gpt
(parted) mkpart primary 0% 100%
(parted) quit
```

Создать файловую систему:

```
root@linux# mkfs.xfs /dev/sdb1
```

Настроить автоматическое монтирование раздела в `/etc/fstab`:

```
/dev/sdb1 /home/storage xfs defaults 0 0
```