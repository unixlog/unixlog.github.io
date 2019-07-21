# Fedora

Инструкция по обновлению **Fedora** между различными версиями дистрибутива (например, Fedora 29 > 30).

## Обновление пакетов

``` bash
root@linux# dnf upgrade --refresh
```

## Установка DNF-дополнения

Обновление между версиями Fedora происходит при помощи DNF-дополнения `dnf-plugin-system-upgrade`:

``` bash
root@linux# dnf install dnf-plugin-system-upgrade
```

## Запуска процесса обновления

``` bash
root@linux# dnf system-upgrade download --releasever=DIST_VER
```

- `DIST_VER` - версия дистрибутива.

## Перезагрузка

``` bash
root@linux# dnf system-upgrade reboot
```