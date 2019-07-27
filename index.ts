import * as migrator from "localstorage-migrator";

const migrations = [
  {
    name: "delta1",
    up: () => {
      localStorage.setItem(
        "hei",
        JSON.stringify({
          hei: "1"
        })
      );
    }
  },
  {
    name: "delta2",
    up: () => {
      var object = JSON.parse(localStorage.getItem("hei") as string);
      object.num = 2;
      localStorage.setItem("hei", JSON.stringify(object));
    }
  },
  {
    name: "delta3",
    up: () => {
      var object = JSON.parse(localStorage.getItem("hei") as string);
      object.num++;
      localStorage.setItem("hei", JSON.stringify(object));
    }
  }
];

migrator.migrate(migrations);

const main = document.getElementById("main") as HTMLElement;
main.innerText += `Object: \r\n${JSON.stringify(
  JSON.parse(localStorage.getItem("hei") as string),
  null,
  2
)}\r\n`;
main.innerText += `Migrations:\r\n${JSON.stringify(
  migrator.getAppliedMigrations(),
  null,
  2
)}`;
