# Workspace Model

The "node" is key in terms of workspace model. Everything is relational. Nodes can have references to other nodes. Nodes can also contain raw data, and nodes can contain fields.

Should fields be modelled as a reference? Not sure.

```typescript

const PrincipalKind = union("user", "agent", "extension", "automation", "system")

table({
    title: "users"
})


table({
    title: "agents"
})


table({
    title: "extensions"
})


table({
    title: "automations"
})


const CapabilityKeys = union(
node.read"
    "node.create",
    "node.update",
    "node.delete",
    "node.createChild",
    "node.updateField",
    "node.addRelation",
    "node.removeRelation",
    "view.render",
    "command.invoke",
    "automation.schedule",
    "extension.install",
    "extension.disable",
    "external.connect",
    "external.sync",
    "asset.read",
    "asset.write"
);

const CapabilityGrant = object({
      principal: PrincipalRef;
  capability: CapabilityKey;
  target:
    | { kind: "workspace"; workspaceId: string }
    | { kind: "node"; nodeId: string }
    | { kind: "node_subtree"; rootNodeId: string }
    | { kind: "tag"; tagNodeId: string }
    | { kind: "field"; fieldDefinitionId: string }
    | { kind: "command"; commandDefinitionId: string }
    | { kind: "external_account"; externalAccountId: string };

  constraints?: {
    maxWritesPerMinute?: number;
    allowedFieldIds?: readonly string[];
    deniedFieldIds?: readonly string[];
    allowedChildKinds?: readonly string[];
    allowDescendants?: boolean;
    expiresAt?: string;
  };
})

table({
    title: "capability_grants",
})

// Policies
Only workspace members can read rows. Only role of type "whatever" can do "capability".
But for Jazz, it's more coarse. For some of these capability things, we rely entirely on disallowing users to access at all, and dealing with them on the backend.

only("admins", "membership.manage");
```
