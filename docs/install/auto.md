# Автоматическая установка

Автоматическая установка при помощи файла `Kickstart`. URL добавляется в параметре `inst.ks=[URL]` при загрузке дистрибутива.

## Fedora

Для персонального компьютера:

```bash
https://unixlog.gitlab.io/data/ks/fedora.ws.cfg
# inst.ks=https://unixlog.gitlab.io/data/ks/fedora.ws.cfg
```

Для сервера:

```bash
https://unixlog.gitlab.io/data/ks/fedora.srv.cfg
# inst.ks=https://unixlog.gitlab.io/data/ks/fedora.srv.cfg
```

Для сервера с SSD:

```bash
https://unixlog.gitlab.io/data/ks/fedora.srv.ssd.cfg
# inst.ks=https://unixlog.gitlab.io/data/ks/fedora.srv.ssd.cfg
```

## CentOS

Для сервера:

```bash
https://unixlog.gitlab.io/data/ks/centos.srv.cfg
# inst.ks=https://unixlog.gitlab.io/data/ks/centos.srv.cfg
```

Для сервера с SSD:

```bash
https://unixlog.gitlab.io/data/ks/centos.srv.ssd.cfg
# inst.ks=https://unixlog.gitlab.io/data/ks/centos.srv.ssd.cfg
```

## Oracle Linux

Для сервера:

```bash
https://unixlog.gitlab.io/data/ks/oel.srv.cfg
# inst.ks=https://unixlog.gitlab.io/data/ks/oel.srv.cfg
```

Для сервера с SSD:

```bash
https://unixlog.gitlab.io/data/ks/oel.srv.ssd.cfg
# inst.ks=https://unixlog.gitlab.io/data/ks/oel.srv.ssd.cfg
```