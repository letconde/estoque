CREATE TABLE estoque (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    numero TEXT NOT NULL,
    localizacao TEXT,
    foto BLOB
);

INSERT INTO estoque (nome, numero, localizacao, foto) 
VALUES ('Peça A', '001', 'Local A', x'255044462D312E330D0A25E2E3CFD30D0A312030206F626A0D0A3C3C2F547970652F584F626A6563743C3C2F537562747970652F494D2F494D6167652F582031203020522F4865696768742033203020522F56616C75652F456E636F64696E672050656666696369656E74732032203020520D0A2F4C656E6774682033203020522F46696C7465722F466C6174654465636F6465643E3E0D0A73747265616D0D0AAE0808080808080A0A2F4C656E6774682033203020522F46696C7465722F466C6174654465636F6465643E3E0D0A747261696C65723C3C2F526F6F742F50616765732032203020522F54696D6520746869732F547970652F436174616C6F672F526F6F742F53697A653E3E0D0A2F526F6F742F496E6465782033203020522F54696D6520746869732F547970652F436174616C6F672F496E6465782F53697A653E3E0D0A2F496E666F2028312028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028302028...