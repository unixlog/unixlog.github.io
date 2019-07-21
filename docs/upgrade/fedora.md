# Fedora

## Обновление пакетов

```
dnf upgrade --refresh
```

## Установка DNF-дополнения

Обновление между версиями Fedora происходит при помощи дополнения `dnf-plugin-system-upgrade`:

```
dnf install dnf-plugin-system-upgrade
```

## Запуска процесса обновления

```
dnf system-upgrade download --releasever=DIST_VER
```

- `DIST_VER` - версия дистрибутива.

## Перезагрузка

```
dnf system-upgrade reboot
```