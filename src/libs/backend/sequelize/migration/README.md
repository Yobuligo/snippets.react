# Sequelize Database Migrations

## How can database changes be migrated in production and locally?

The core principle is to create classes that contain code to perform the migration itself. This includes creating or deleting tables, columns, and indexes, as well as modifying column types, names, etc.

---

## Installation

The following libraries need to be installed:

- Sequelize CLI (Command Line Interface), mainly used to generate new migration files.

```
npm install --save-dev sequelize-cli
```

- `Umzug` is a library used to execute database migrations. Migration files are sorted alphabetically and executed in that order. It is recommended to prefix migrations with a timestamp so they are executed correctly. Sequelize CLI can be used for this. `Umzug` also logs executed migrations in `SequelizeMeta`, preventing duplicate executions.

```
npm install umzug
```

---

## Directory Structure

Sequelize provides a default structure, which we do not use. Instead, we only need:

- A directory for migration files
- A migration framework (wrapper around `Umzug`)

---

## Configuration

To use Sequelize CLI, create a `.sequelizerc` file:

```javascript
require('ts-node/register');

module.exports = {
  config: 'sequelize/config.js',
  'migrations-path': 'src/db/migration/migrations',
};
```

---

## What is a Database Migration?

A database migration refers to all changes required to transform a database from one consistent state (e.g., product version A) to another consistent state (e.g., version B).

Example:
Version 2.8.5 → 2.9.0 requires adding a new column to `company_datas`. This change must be implemented as code in a separate migration file.

---

## Migration Types

Always ensure transitions happen between consistent states.

Example for adding a required column:

1. Add column with `allowNull: true`
2. Initialize data
3. Change to `allowNull: false`

---

### Add Column

```typescript
async up(queryInterface, Sequelize) {
  await queryInterface.addColumn('Customers', 'phone', {
    type: Sequelize.STRING(30),
    allowNull: true
  });
}

async down(queryInterface) {
  await queryInterface.removeColumn('Customers', 'phone');
}
```

---

### Modify Column

```typescript
await queryInterface.changeColumn('Customers', 'phone', {
  type: Sequelize.STRING(50),
  allowNull: true
});
```

---

### Remove Column

```typescript
await queryInterface.removeColumn('Customers', 'phone');
```

---

### Add Index

```typescript
await queryInterface.addIndex('Customers', ['email'], {
  name: 'idx_customers_email',
  unique: true
});
```

---

### Remove Index

```typescript
await queryInterface.removeIndex('Customers', 'idx_customers_email');
```

---

### Create Table

```typescript
await queryInterface.createTable('Notes', {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  customerId: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
});
```

---

### Migration with Data Changes

```typescript
async up(queryInterface, Sequelize) {
  await queryInterface.addColumn('Customers', 'status', {
    type: Sequelize.STRING(20),
    allowNull: true
  });

  await queryInterface.sequelize.query(`
    UPDATE Customers SET status = 'active' WHERE status IS NULL
  `);

  await queryInterface.changeColumn('Customers', 'status', {
    type: Sequelize.STRING(20),
    allowNull: false
  });
}
```

---

## Creating a Migration

A migration file contains the code required to perform database changes.

---

### Generate Migration File

```bash
npx sequelize-cli migration:generate --name add-paymentType-to-invoiceConfig
```

Rename `.js` to `.ts`.

---

### Implement Migration

Replace generated content with:

```typescript
import { IMigration } from "../types/IMigration";
import { IMigrationContext } from "../types/IMigrationContext";

class Migration implements IMigration {
  down(context: IMigrationContext): Promise<void> {
    throw new Error("Method not implemented.");
  }

  up(context: IMigrationContext): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

module.exports = new Migration();
```

---

## Running Migrations

Run locally:

```bash
node ./dist/db/migration/utils/runMigrateTenants.js
```

Or programmatically:

- `runMigrateTenants`
- `TenantMigrationExecutor`

---

## SequelizeMeta Table

Each database contains a `SequelizeMeta` table, where `Umzug` tracks executed migrations.
