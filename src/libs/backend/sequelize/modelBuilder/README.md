# Sequelize Model Builder

Wrapper around the Sequelize API to create Sequelize models. Especially to simplify the creation of relations.

## Best Practices folders and models file

1. Create a folder `/modules` that contains all model specific classes, interfaces, functions etc.
2. Create a separate folder for each model type that contains the Sequelize model, controllers and repos, e.g. `/modules/articles`.
3. Create a file `models.ts` that contains all Sequelize models

## Create Sequelize model

The following code snippet shows a simple example how to create a Sequelize model with the SequelizeModelBuilder. Required information:

1. The source type , here `IArticleGroup` to infer the properties that can be defined as columns.
2. The columns itself based on the Sequelize typing.
3. The table name itself, used to create or change the database table.
4. the indexes and relations, here `oneToMany`.
5. Finally build the Sequelize model.

```typescript
export const ArticleGroup = new SequelizeModelBuilder<IArticleGroup>({
  columns: {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
    },
    title: DataTypes.STRING(100),
  },
  tableName: "article_groups",
})
  .oneToMany(Article, "articleGroupId", {
    deleteCascade: true,
    fillSourceProp: "articles",
  })
  .build();
```

## Relations

Supported are the most required relations.

### One-to-one relation

The following example demonstrates how to define a one-to-one relationship between `Article` and `ArticleDetails`.
In this setup, each `Article` is associated with exactly one `ArticleDetails` record.

The foreign key `articleId` is defined on the target model (`ArticleDetails`) and references the source model (`Article`).

- `foreignKey` (`articleId`)

  Specifies the column on the target entity (`ArticleDetails`) that holds the reference to the source entity (`Article`).

- `deleteCascade`

  Determines whether the related entity (`ArticleDetails`) should be automatically deleted when the source entity (`Article`) is removed.

- `fillSourceProp`

  Defines the property name on the source entity (`Article`) that will be populated with the related entity (`ArticleDetails`) when the relation is loaded.

- `fillTargetProp` (not part of the example)

  Defines the property name on the target entity (`ArticleDetails`) that will be populated with the related entity (`Article`) when the relation is loaded.

```typescript
export const Article = new SequelizeModelBuilder<IArticle>({
  ...
  .oneToOne(ArticleDetails, "articleId", {
    deleteCascade: true,
    fillSourceProp: "articleDetail",
  })
  ...
```

### One-to-many relation

The following example demonstrates how to define a one-to-many relationship between `Article` and `ArticleTransaction`.
In this setup, each `Article` is associated with no to many `ArticleTransaction` records.

The foreign key `articleId` is defined on the target model (`ArticleTransaction`) and references the source model (`Article`).

- `foreignKey` (`articleId`)

  Specifies the column on the target entity (`ArticleTransaction`) that holds the reference to the source entity (`Article`).

- `deleteCascade`

  Determines whether the related entities (`ArticleTransaction`) should be automatically deleted when the source entity (`Article`) is removed.

- `fillSourceProp`

  Defines the property name on the source entity (`Article`) that will be populated with the related entities (`ArticleTransaction`) when the relation is loaded.

- `fillTargetProp` (not part of the example)

  Defines the property name on the target entities (`ArticleTransaction`) that will be populated with the related entity (`Article`) when the relation is loaded.

```typescript
export const Article = new SequelizeModelBuilder<IArticle>({
  ...
  .oneToMany(ArticleTransaction, "articleId", {
    deleteCascade: true,
    fillSourceProp: "articleTransactions",
  })
  ...
```

### Many-to-many relation

The following example demonstrates how to define a many-to-many relationship between `Article` and `ArticleTag`.
In this setup, each `Article` can be associated with each `ArticleTag` record.

Defining the relation contains of

- providing the target model (`ArticleTag`)
- and the `tableName`of the relation table. Best practice for the name <source-table-name>-<target-table-name>

```typescript
export const Article = new SequelizeModelBuilder<IArticle>({
  ...
  .manyToMany(ArticleTag, "article_article_tags")
  ...
```

### Self-one-to-one relation

The same as one to one relation, but the relation refers to themselves.

The foreign key `relatedInvoiceId` is defined on model (`Invoice`) and references the themselves.

- `foreignKey` (`relatedInvoiceId`)

  Specifies the column on (`Invoice`) that holds the reference to origin invoice.

- `deleteCascade`

  Determines whether the related entity (`Invoice`) should be automatically deleted when the source entity is removed.

- `fillSourceProp`

  Defines the property name on the origin source (`Invoice`) that will be populated with the related cancellation (`Invoice`) when the relation is loaded.

- `fillTargetProp`

  Defines the property name on the target cancellation (`Invoice`) that will be populated with the related origin entity (`Invoice`) when the relation is loaded.

```typescript
const Invoice = new SequelizeModelBuilder<IInvoice>({
  ...
  .selfOneToOne("relatedInvoiceId", {
    fillSourceProp: "cancellationInvoice",
    fillTargetProp: "originInvoice",
  })
  ...
```

### Self-one-to-many relation

The same as one to many relation, but the relation refers to themselves.

The foreign key `relatedInvoiceId` is defined on model (`Invoice`) and references the themselves.

- `foreignKey` (`relatedInvoiceId`)

  Specifies the column on (`Invoice`) that holds the reference to origin invoice.

- `deleteCascade`

  Determines whether the related entities (`Invoice`) should be automatically deleted when the source entity is removed.

- `fillSourceProp`

  Defines the property name on the origin source (`Invoice`) that will be populated with the related cancellation (`Invoice`)s when the relation is loaded.

- `fillTargetProp`

  Defines the property name on the target cancellation (`Invoice`) that will be populated with the related origin entity (`Invoice`) when the relation is loaded.

```typescript
const Invoice = new SequelizeModelBuilder<IInvoice>({
  ...
  .selfOneToMany("relatedInvoiceId", {
    fillSourceProp: "cancellationInvoices",
    fillTargetProp: "originInvoice",
  })
  ...
```

## Indexes

The Sequelize builder provides a method to add indexes for the model table.

### Single field index

A single index can be added by providing the index name and the table column for which the index should be added.

```typescript
export const Article = new SequelizeModelBuilder<IArticle>({
  ...
  .addIndex("name", ["name"])
  ...
```

### Multiple fields index

If it is required to set a combined index it is possible to provide the required columns.

```typescript
export const Article = new SequelizeModelBuilder<IArticle>({
  ...
  .addIndex("createdAt_updatedAt", ["createdAt", "updatedAt"])
  ...
```

### Unique index

If a column index should be should be unique, the corresponding prop `unique` can be set to `true` when adding an index.

```typescript
export const Article = new SequelizeModelBuilder<IArticle>({
  ...
  .addIndex("idxPrice", ["price"], true)
  ...
```

## Exclude

Define columns that shouldn't be loaded as default.

This means these columns won't be loaded with e.g. sequelize.findOne(), sequelize.findByPK() etc.
These columns must be requested explicitly when loading data.

```typescript
export const User = new SequelizeModelBuilder<IUser>({
  ...
  .excludeOnDefaultLoad("password", "salt")
  ...
```
